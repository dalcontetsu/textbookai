import { useState, useRef, useEffect } from 'react'
import FileUpload from '@/components/FileUpload'
import styles from '../src/styles/Home.module.css'

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState(null)
  const [uploadBoxOffset, setUploadBoxOffset] = useState(0)
  const featuresRef = useRef(null)
  const contentRefs = useRef([])

  useEffect(() => {
    const updateUploadPosition = () => {
      const baseOffset = 20 // Default padding
      
      if (expandedFeature === null) {
        // Reset to base position when no feature is expanded
        setUploadBoxOffset(baseOffset)
        return
      }

      if (featuresRef.current && contentRefs.current[expandedFeature]) {
        // Get the full height including expanded content
        const featuresRect = featuresRef.current.getBoundingClientRect()
        const expandedContentRect = contentRefs.current[expandedFeature].getBoundingClientRect()
        const totalHeight = expandedContentRect.bottom - featuresRect.top + 400
        setUploadBoxOffset(totalHeight + baseOffset)
      }
    }

    updateUploadPosition()
    window.addEventListener('resize', updateUploadPosition)

    return () => window.removeEventListener('resize', updateUploadPosition)
  }, [expandedFeature])

  const features = [
    {
      title: "Smart Summaries",
      description: "Get AI-powered chapter summaries and key points",
      expandedContent: (
        <div className={`${styles["expanded-content"]} ${styles["active"]}`}>
          <img src="/images/summary-demo.gif" alt="Summary Demo" />
          <p>Our AI analyzes your textbook to create concise, intelligent summaries that highlight key concepts and important details. Perfect for quick review or deep understanding.</p>
          <ul>
            <li>Chapter breakdowns</li>
            <li>Key concept highlighting</li>
            <li>Visual concept maps</li>
          </ul>
        </div>
      )
    },
    {
      title: "Interactive Quizzes",
      description: "Test your knowledge with adaptive learning",
      expandedContent: (
        <div className={`${styles["expanded-content"]} ${styles["active"]}`}>
          <img src="/images/quiz-demo.gif" alt="Quiz Demo" />
          <p>Dynamic quizzes that adapt to your learning style and knowledge level, ensuring you master the material effectively.</p>
          <ul>
            <li>Personalized questions</li>
            <li>Real-time feedback</li>
            <li>Progress tracking</li>
          </ul>
        </div>
      )
    },
    {
      title: "Study Assistant",
      description: "Ask questions and get instant explanations",
      expandedContent: (
        <div className={`${styles["expanded-content"]} ${styles["active"]}`}>
          <img src="/images/assistant-demo.gif" alt="Assistant Demo" />
          <p>Your personal AI tutor that answers questions, explains concepts, and helps you understand difficult topics.</p>
          <ul>
            <li>24/7 availability</li>
            <li>Contextual explanations</li>
            <li>Multiple learning approaches</li>
          </ul>
        </div>
      )
    }
  ]

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index)
  }

  return (
    <div className="hero-section">
      <div className={styles["hero-content"]}>
        <h1>Transform Your Learning Experience</h1>
        <p className="mission-statement">
          TextbookAI turns your textbooks into interactive learning experiences. 
          Using advanced AI, we create personalized study materials, smart summaries, 
          and adaptive quizzes to help you master your coursework efficiently.
        </p>
        <div className={styles["features-container"]} ref={featuresRef}>
          <div className={styles["features-grid"]}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`${styles["feature-card"]} ${expandedFeature === index ? styles["expanded"] : ''}`}
                onClick={() => toggleFeature(index)}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {expandedFeature === index && (
                  <div ref={el => (contentRefs.current[index] = el)}>
                    {feature.expandedContent}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
        className={styles["upload-section"]}
        style={{
          transform: `translateY(${uploadBoxOffset}px)`,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <h2>start learning smarter</h2>
        <FileUpload />
      </div>
    </div>
  )
}
