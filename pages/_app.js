import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress
        options={{ easing: "ease", speed: 500 }}
        color="#2397DE"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
    />
    <Navbar />
    <div className='container'>
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  )
}

export default MyApp
