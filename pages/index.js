import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bannerImg from "../assets/images/design_banner_normal.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akash Yadav - Portfolio</title>
        <meta name="description" content="Hey there!! i'm Akash Yadav, A passionate fullstack developer from India. check out my profile here.." />
        <meta name="keywords" content="portfolio, full, stack, web, developer, akash yadav"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <div className={styles.mainbanner}>
          <div className={styles.welcometxt}>
            <svg width="100%" height="100%">        
              <text x="50%" y="60%"  textAnchor="middle"  >
                Welcomes You!!
              </text>
            </svg>
          </div>
          <div  className={styles.bannerRight}>
            <Image src={bannerImg} width={750} height={550}/>
          </div>
        </div>
      </section>
    </div>
  )
}