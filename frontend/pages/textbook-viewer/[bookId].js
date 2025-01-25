import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import TextbookViewer from '@/components/textbook/TextbookViewer'

export default function TextbookViewerPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [pdfData, setPdfData] = useState(null)
  const router = useRouter()
  
  useEffect(() => {
    // Retrieve PDF data from localStorage when component mounts
    const storedPdfData = localStorage.getItem('currentPdfMetadata')
    if (storedPdfMetadata) {
      const metadata = JSON.parse(storedPdfMetadata)
      setPdfData(metadata)
    }
  }, [])

  return (
    <Layout>
      <div className="textbook-viewer-container">
        <TextbookViewer pdfData={pdfData} activeChapter={activeChapter} />
      </div>
    </Layout>
  )
}