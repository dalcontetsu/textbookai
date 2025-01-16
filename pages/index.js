import Layout from '../src/components/layout/Layout'
import FileUpload from '@/components/FileUpload'
import styles from '../src/styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className="hero-section" style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className={styles["hero-content"]}>
          <h1>Transform Your Learning Experience</h1>
          <p className="mission-statement">
            TextbookAI turns your textbooks into interactive learning experiences. 
            Using advanced AI, we create personalized study materials, smart summaries, 
            and adaptive quizzes to help you master your coursework efficiently.
          </p>
          <div className={styles["features-grid"]}>
            <div className={styles["feature-card"]}>
              <h3>Smart Summaries</h3>
              <p>Get AI-powered chapter summaries and key points</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Interactive Quizzes</h3>
              <p>Test your knowledge with adaptive learning</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Study Assistant</h3>
              <p>Ask questions and get instant explanations</p>
            </div>
          </div>
        </div>
        <div className={styles["upload-section"]}>
          <h2>start learning smarter</h2>
          <FileUpload />
        </div>
      </div>
    </Layout>
  )
}
