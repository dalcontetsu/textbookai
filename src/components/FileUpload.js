import { useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function FileUpload({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false)
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

  const processFile = (file) => {
    if (file && file.type === 'application/pdf') {
      if (onFileSelect) {
        onFileSelect(file)
      }
      router.push(`/textbook-viewer/${encodeURIComponent(file.name)}`)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  return (
    <div 
      className={`upload-zone ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        accept=".pdf" 
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <div className="upload-content">
        <p>Drag & drop your textbook here</p>
        <p>or click to select file</p>
      </div>
    </div>
  )
}