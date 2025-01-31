//import { Menu } from '@headlessui/react'
import { useAuth } from '../../context/AuthContext'
import Link from 'next/link'
import styles from '../../styles/Layout.module.css'
import UserProfile from '../UserProfile'

export default function Layout({ children }) {
  const { user, logout } = useAuth()

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
              <Link href="/login">
                <button className={styles.loginBtn}>Log In</button>
              </Link>
              <Link href="/signup">
                <button className={styles.signupBtn}>Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
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