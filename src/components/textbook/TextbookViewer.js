import { useState, useEffect } from 'react'
import ChapterTabs from './ChapterTabs'
import PageViewer from './PageViewer'
import SummaryPanel from './SummaryPanel'

export default function TextbookViewer({ pdfData, activeChapter }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if (pdfData) {
      // Initialize PDF viewer with the data
      initializePdfViewer(pdfData)
    }
  }, [pdfData])

  const initializePdfViewer = async (pdfData) => {
    // Here you would initialize your PDF viewer library
    // For example, if using PDF.js:
    // const pdf = await pdfjsLib.getDocument(pdfData.data).promise
    // setTotalPages(pdf.numPages)
  }

  return (
    <div className="textbook-viewer-layout">
      <ChapterTabs activeChapter={activeChapter} />
      <div className="content-container">
        <PageViewer 
          pdfData={pdfData}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <SummaryPanel />
      </div>
      {!pdfData && (
        <div className="no-pdf-message">
          <p>No PDF loaded. Please upload a textbook first.</p>
        </div>
      )}
    </div>
  )
}