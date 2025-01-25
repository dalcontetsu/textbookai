import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Set worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PageViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [selectedText, setSelectedText] = useState('')

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function handleTextSelection() {
    const selection = window.getSelection()
    setSelectedText(selection.toString())
  }

  return (
    <div className="page-viewer">
      <div className="page-controls">
        <button 
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <span>Page {pageNumber} of {numPages}</span>
        <button 
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
        <button onClick={() => setScale(prev => prev + 0.1)}>Zoom In</button>
        <button onClick={() => setScale(prev => Math.max(prev - 0.1, 0.5))}>Zoom Out</button>
      </div>

      <div className="document-container" onMouseUp={handleTextSelection}>
        {pdfFile ? (
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page 
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        ) : (
          <div className="upload-prompt">
            Please upload a PDF to begin
          </div>
        )}
      </div>

      {selectedText && (
        <div className="selection-toolbar">
          <button onClick={() => console.log('Request explanation for:', selectedText)}>
            Explain Selection
          </button>
        </div>
      )}
    </div>
  )
}