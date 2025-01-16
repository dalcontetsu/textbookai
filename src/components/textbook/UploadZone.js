export default function UploadZone() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
  }

  return (
    <div className="upload-zone">
      <input 
        type="file" 
        accept=".pdf,.epub" 
        onChange={handleFileUpload}
      />
    </div>
  )
}
