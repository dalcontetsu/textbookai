import { useState } from 'react'
import ChapterTabs from './ChapterTabs'
import PageViewer from './PageViewer'
import SummaryPanel from './SummaryPanel'

export default function TextbookViewer() {
  const [pdfFile, setPdfFile] = useState(null)

  const handleFileSelect = (file) => {
    setPdfFile(file)
  }

  return (
    <div className="textbook-viewer-layout">
      <ChapterTabs />
      <div className="content-container">
        <PageViewer file={pdfFile} />
        <SummaryPanel />
      </div>
    </div>
  )
}