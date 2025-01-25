import '../src/styles/globals.css'
import '../src/styles/landing.css'
import '../src/styles/Book.module.css'
import AnimatedBackground from '../src/components/AnimatedBackground'
import Layout from '../src/components/layout/Layout'
import { AuthProvider } from '../src/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AnimatedBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp