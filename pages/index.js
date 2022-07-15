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
            <svg>
              <text x="50%" y="90%"  textAnchor="middle"  >
                Welcomes You!!
              </text>
            </svg>
            <div className={styles.hometxt}>
              <div className={styles.hhtext}>Hey there!<br/> i'm <strong>Akash Yadav</strong></div>
              <p>A passionate fullstack developer from India.</p>
              <p className={styles.decp}> i like computers, you know how these are changing lives of billions of people's & i'm also one of them. i love to code, this place is to represent my presence here on this online world. Have a look on my work if you got some time...</p>
              <p><strong><span style={{color:'#2397DE'}}>Thank you..</span> for visiting... <span style={{color:'#2397DE'}}>Have a nice day!!</span></strong></p>
              <br/>
              <div align="right" className={styles.social}>
                <a href="https://www.github.com/aksh-git" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/github.svg" width="30" height="30"/></a>
                <a href="http://www.instagram.com/ig_akash369" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/instagram.svg" width="30" height="30"/></a>
                <a href="https://www.linkedin.com/in/akash-yadav-36aa56230/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="30" height="30"/></a>
                <a href="https://www.twitter.com/akash_369_" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/twitter.svg" width="30" height="30"/></a>
              </div>
            <div className='divider'></div> 
            </div> 
          </div>
          <div className={styles.bannerRight}>
            <Image src={bannerImg} width={750} height={550}/>
          </div>
        </div>
      </section>
    </div>
  )
}