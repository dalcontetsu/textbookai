import { useAuth } from '../src/context/AuthContext'
import Book from '../src/components/book/Book'
import FileUpload from '../src/components/FileUpload'
import LoginForm from '../src/components/auth/LoginForm'

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="landing-container">
      {/* Hero Section with Book */}
      <section className="hero">
        <Book />
      </section>

      {/* Conditional Render based on Auth State */}
      <section className="upload-section">
        {user ? (
          <>
            <h2>Start Learning Smarter</h2>
            <p>Upload your textbook to begin your enhanced learning journey</p>
            <FileUpload />
          </>
        ) : (
          <>
            <h2>Join TextbookAI</h2>
            <p>Log in or sign up to start your enhanced learning journey</p>
            <LoginForm />
          </>
        )}
      </section>
    </div>
  )
}
