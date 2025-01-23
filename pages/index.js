
import Book from '../src/components/book/Book'
import FileUpload from '../src/components/FileUpload'

export default function Home() {
  return (
    <div className="landing-container">
      {/* Hero Section with Book */}
      <section className="hero">
        <Book />
      </section>

      {/* Upload Section */}
      <section className="upload-section">
        <h2>Start Learning Smarter</h2>
        <p>Upload your textbook to begin your enhanced learning journey</p>
        <FileUpload />
      </section>
    </div>
  )
}
