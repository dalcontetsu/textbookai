import '../src/styles/globals.css'
import '../src/styles/landing.css'
import '../src/styles/Book.module.css'
import AnimatedBackground from '../src/components/AnimatedBackground'
import Layout from '../src/components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp