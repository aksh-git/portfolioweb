import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akash Yadav - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <div className={styles.mainbanner}>
          <div className={styles.welcometxt} align="center">Welcomes You!!</div>
        </div>
      </section>
    </div>
  )
}
