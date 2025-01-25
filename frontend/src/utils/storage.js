import { openDB } from 'idb'
import AWS from 'aws-sdk'

const DB_NAME = 'textbookAI'
const STORE_NAME = 'textbooks'
const DB_VERSION = 1

// Initialize AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION
})

// IndexedDB setup
export async function initDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
  })
}

// Store PDF in IndexedDB and S3
export async function storePDF(file) {








  const metadata = await uploadToS3(file)

  // Store in IndexedDB
  const db = await initDB()
  await db.put(STORE_NAME, {
    ...metadata,

    data: file,
    timestamp: Date.now()
  })


  return metadata
}
  export async function uploadToS3(file) {
    const metadata = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type
    }

    const BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME

    await s3.upload({
      Bucket: BUCKET_NAME,
      Key: `textbooks/${metadata.id}/${file.name}`,
      Body: file,
      ContentType: file.type
    }).promise()

    return metadata
  }
// Retrieve PDF from IndexedDB or S3
export async function getPDF(id) {
  const db = await initDB()
  let pdf = await db.get(STORE_NAME, id)

  if (!pdf) {
    // Fallback to S3 if not in IndexedDB
    const s3Object = await s3.getObject({
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: `textbooks/${id}`
    }).promise()

    pdf = s3Object.Body
    
    // Cache in IndexedDB for future use
    await db.put(STORE_NAME, {
      id,
      data: pdf,
      timestamp: Date.now()
    })
  }

  return pdf
}

// List all stored PDFs
export async function listPDFs() {
  const db = await initDB()
  return db.getAll(STORE_NAME)
}

// Delete PDF from both stores
export async function deletePDF(id) {
  const db = await initDB()
  await db.delete(STORE_NAME, id)

  await s3.deleteObject({
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: `textbooks/${id}`
  }).promise()
}
