import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">TextbookAI</Link>
        </div>
        
        <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="auth-buttons">
          <Link href="/login">
            <button className="login-btn">Log In</button>
          </Link>
          <Link href="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <p>© 2024 TextbookAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
