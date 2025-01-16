import Layout from '../src/components/layout/Layout'
import FileUpload from '@/components/FileUpload'
export default function Home() {
  return (
    <Layout>
      <div className="upload-section">
        <h2>Upload your textbook</h2>
        <button>Select PDF</button>
        <FileUpload />
      </div>
    </Layout>
  )
}
