import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import { BiMenu } from 'react-icons/bi'
import { AiTwotoneHeart } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from './Logo'

function Navbar(props) {
  const profile_url = process.env.PROFILE_PIC_URL;
  const router = useRouter()
  const [path, setpath] = useState(router.pathname)
  const [navmenu, setnavmenu] = useState(false)

  console.log(profile_url);

  useEffect(() => {
    if(router.isReady){
      setpath(router.pathname)
    }
  }, [router])

  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.topnav}>
          <BiMenu onClick={()=>{setnavmenu(!navmenu)}} title='Menu' className={`${styles.menuicon} hovercircle`} />
          <span className={styles.menutitle}><Logo color='#2397DE' options={{height:'28',width:'28'}} /> Akash <span style={{color:'#2397DE'}}>Yadav</span></span>
          <AiTwotoneHeart fill='#CC3E4A' title='Support' className={`${styles.menuicon} hovercircle`} />
        </div>
        <div className={styles.pager}>
            <Link href='/'><div>
                <span>Home</span>
                {path==="/" && <span className={styles.pageractive}></span>}
            </div></Link>
            <Link href='/resume'><div>
                <span>Resume</span>
                {path==="/resume" && <span className={styles.pageractive}></span>}
            </div></Link>
            <Link href='/contact'><div>
                <span>Contact</span>
                {path==="/contact" && <span className={styles.pageractive}></span>}
            </div></Link>
        </div>
      </nav>
      <div style={{display:navmenu?"":"none"}} onClick={()=>{setnavmenu(false)}} className={styles.menu}>
        <div className={styles.wrap}>
            <div className={styles.inside}>
                <div className={styles.closebtn}>
                 <span>Close menu</span>
                 <MdOutlineClose className={`${styles.menuicon} hovercircle`} />
                </div>
                <div className={styles.banner}>
                  <img src='https://pbs.twimg.com/profile_images/1443777771134619650/z4EfFnEY_400x400.jpg' alt="profile-image" />
                  <span className={styles.name}>Akash yadav</span>
                  <span className={styles.title}>Full Stack developer</span>
                </div>
                <ul className={styles.menulist}>
                  <li>Projects</li>
                  <li>Feedback</li>
                  <li>About</li>
                </ul>
                <div className={styles.menuBtnContainer}>
                  <button className={styles.hiremebtn}>Hire-Me</button>
                  <button className={styles.connectbtn}>Connect</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
