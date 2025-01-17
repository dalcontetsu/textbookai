import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { storePDF } from '@/utils/storage'

export default function FileUpload({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef(null)
  const router = useRouter()

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    processFile(file)
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    processFile(file)
  }

  const processFile = async (file) => {
    if (file && file.type === 'application/pdf') {
      setIsProcessing(true)
      
      const fileId = Date.now().toString()
      const pdfMetadata = {
        id: fileId,
        name: file.name,
        size: file.size,
        lastModified: file.lastModified,
        type: file.type
      }

      try {
        // Store in IndexedDB
        await storePDF(fileId, {
          metadata: pdfMetadata,
          data: file
        })

        // Store metadata in localStorage for quick access
        localStorage.setItem('currentPdfMetadata', JSON.stringify(pdfMetadata))

        if (onFileSelect) {
          onFileSelect(pdfMetadata)
        }

        router.push(`/textbook-viewer/${fileId}`)
      } catch (error) {
        console.error('Error processing file:', error)
        // Add error handling UI here
      } finally {
        setIsProcessing(false)
      }
    }
  }

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  return (
    <div 
      className={`upload-zone ${isDragging ? 'dragging' : ''} ${isProcessing ? 'processing' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
      style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '2rem auto',
        maxWidth: '500px',
        cursor: 'pointer',
        border: isDragging ? '2px dashed #4a90e2' : '2px dashed #ccc',
        transition: 'all 0.3s ease'
      }}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        accept=".pdf" 
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <div style={{ marginBottom: '1rem' }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </div>
      <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>
        {isProcessing ? 'Processing...' : 'Drop your textbook here'}
      </h3>
      <p style={{ color: '#666', margin: '0' }}>
        or click to select PDF file
      </p>
    </div>
  )
}