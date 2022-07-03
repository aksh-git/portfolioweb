import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import { BiMenu } from 'react-icons/bi'
import { AiTwotoneHeart } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar(props) {

  const router = useRouter()
  const [path, setpath] = useState(router.pathname)

  useEffect(() => {
    if(router.isReady){
      setpath(router.pathname)
    }
  }, [router])

  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.topnav}>
            <BiMenu title='Menu' className={`${styles.menuicon} hovercircle`} />
            <span className={styles.menutitle}>Akash Yadav</span>
            <AiTwotoneHeart title='Support' className={`${styles.menuicon} hovercircle`} />
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
      <div className={styles.menu}>
        <div className={styles.wrap}>
            <div className={styles.inside}>
                <div className={styles.banner}>
                    <Image
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
