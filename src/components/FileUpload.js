import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function FileUpload() {
  const [file, setFile] = useState(null)

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/epub+zip': ['.epub']
    }
  })

  return (
    <div className="upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your textbook here...</p>
        ) : (
          <div>
            <p>Drag and drop your textbook here, or click to browse</p>
            <p className="file-types">Supports PDF and EPUB formats</p>
          </div>
        )}
      </div>
      {file && <p className="selected-file">Selected: {file.name}</p>}
    </div>
  )
}
