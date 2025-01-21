import '../src/styles/globals.css'
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