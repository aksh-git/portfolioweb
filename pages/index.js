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
              <div className={styles.hhtext}>Hey there!<br/> i&#39;m <strong>Akash Yadav</strong></div>
              <p>A passionate fullstack developer from India.</p>
              <p className={styles.decp}> i like computers, you know how these are changing lives of billions of people&#39;s & i&#39;m also one of them. i love to code, this place is to represent my presence here on this online world. Have a look on my work if you got some time...</p>
              <p><strong><span style={{color:'#2397DE'}}>Thank you..</span> for visiting... <span style={{color:'#2397DE'}}>Have a nice day!!</span></strong></p>
              <br/>
              <div align="right" className={styles.social}>
                <a href="https://www.github.com/aksh-git" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/github-dark.svg" width="30" height="30" alt="github"/></a>
                <a href="http://www.instagram.com/ig_akash369" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/instagram.svg" width="30" height="30" alt="instagram"/></a>
                <a href="https://www.linkedin.com/in/akash-yadav-36aa56230/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="30" height="30" alt="linkedin"/></a>
                <a href="https://www.twitter.com/akash_369_" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/socials/twitter.svg" width="30" height="30" alt="twitter"/></a>
              </div>
            <div className='divider'></div> 
            </div> 
          </div>
          <div className={styles.bannerRight}>
            <Image src={bannerImg} width={750} height={550} alt="banner"/>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='hbadge'>
          <span className='hbh'>Tech Stack</span>
          <span className='hbt'>Technologies i work with</span>
        </div>
        
        <div className={styles.techstack}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/javascript-colored.svg" alt="JavaScript" width="36" height="36"/></a>
          <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/java-colored.svg" alt="Java" width="36" height="36"/></a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/python-colored.svg" alt="Python" width="36" height="36"/></a>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/html5-colored.svg" alt="HTML5" width="36" height="36"/></a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/react-colored.svg" alt="React" width="36" height="36"/></a>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/nextjs-colored-dark.svg" alt="NextJs" width="36" height="36"/></a>
          <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/css3-colored.svg" alt="CSS3" width="36" height="36"/></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/tailwindcss-colored.svg" alt="TailwindCSS" width="36" height="36"/></a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/bootstrap-colored.svg" alt="Bootstrap" width="36" height="36"/></a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/nodejs-colored.svg" alt="NodeJS" width="36" height="36"/></a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/express-colored-dark.svg" alt="Express" width="36" height="36"/></a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/mongodb-colored.svg" alt="MongoDB" width="36" height="36"/></a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/mysql-colored.svg" alt="MySQL" width="36" height="36"/></a>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/firebase-colored.svg" alt="Firebase" width="36" height="36"/></a>
          <a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/heroku-colored.svg" alt="Heroku" width="36" height="36"/></a>
          <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/django-colored-dark.svg" alt="Django" width="36" height="36"/></a>
          <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/photoshop-colored.svg" alt="Photoshop" width="36" height="36"/></a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/aksh-git/assets/main/skills/figma-colored.svg" alt="Figma" width="36" height="36"/></a>
        </div>
        <div className='divider'></div> 
      </div>
    </div>
  )
}