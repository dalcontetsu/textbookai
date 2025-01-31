//import { Menu } from '@headlessui/react'
import { useAuth } from '../../context/AuthContext'
import Link from 'next/link'
import styles from '../../styles/Layout.module.css'
import UserProfile from '../UserProfile'
import { useState } from 'react'
import Modal from '../Modal'
import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'  // New import

export default function Layout({ children }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const { user } = useAuth()

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">TextbookAI</Link>
        </div>

        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/team" className={styles.navLink}>Our Team</Link>
          <Link href="/careers" className={styles.navLink}>Careers</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className={styles.authButtons}>
          {user ? (
            <UserProfile />
          ) : (
            <>
              <button 
                onClick={() => setIsLoginModalOpen(true)} 
                className={styles.loginBtn}
              >
                Log In
              </button>
              <button 
                onClick={() => setIsSignupModalOpen(true)} 
                className={styles.signupBtn}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <Modal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
      >
        <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
      </Modal>

      <Modal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
      >
        <SignupForm onSuccess={() => setIsSignupModalOpen(false)} />
      </Modal>

      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <p>© 2024 TextbookAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}