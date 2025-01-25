export default function About() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>Revolutionizing Textbook Learning</h1>
        <p className="tagline">Empowering students with comprehensive AI-powered learning tools</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>At TextbookAI, we're transforming how students interact with educational content. We believe that effective learning comes from understanding, not just memorizing. Our platform combines cutting-edge AI technology with proven learning methodologies to create a comprehensive study environment.</p>
      </section>

      <section className="why-us-section">
        <h2>Why TextbookAI?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>All-In-One Solution</h3>
            <p>Unlike fragmented solutions that combine ChatGPT with legacy tools, TextbookAI provides a unified, purpose-built platform for textbook learning.</p>
          </div>
          
          <div className="feature">
            <h3>Focus on Understanding</h3>
            <p>We prioritize deep comprehension over quick answers, helping students master their course material rather than just completing assignments.</p>
          </div>
          
          <div className="feature">
            <h3>Adaptive Learning</h3>
            <p>Our sophisticated AI engine personalizes the learning experience, adjusting to each student's pace and learning style.</p>
          </div>
          
          <div className="feature">
            <h3>Smart Technology</h3>
            <p>Powered by advanced NLP and machine learning, our platform offers intelligent summaries, interactive quizzes, and real-time study assistance.</p>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <h2>Our Technology</h2>
        <p>TextbookAI leverages state-of-the-art artificial intelligence, including:</p>
        <ul>
          <li>Advanced text processing and normalization</li>
          <li>Vector-based semantic search for precise information retrieval</li>
          <li>Adaptive learning algorithms that evolve with student progress</li>
          <li>Real-time content generation and personalized feedback</li>
        </ul>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>We envision a future where every student has access to intelligent, personalized learning tools that make education more effective and engaging. TextbookAI is leading this transformation by creating technology that understands not just the content, but how students learn.</p>
      </section>
    </div>
  )
}