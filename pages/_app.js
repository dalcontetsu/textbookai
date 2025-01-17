import '../src/styles/globals.css'
import AnimatedBackground from '../src/components/AnimatedBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedBackground />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp