import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const followCursor = (x, y) => {
      const mainscreen = document.querySelector(`.${styles.main}`);
      // setTimeout(() => {
        mainscreen.childNodes.forEach((child) => {
          if(child.className === "cursor") child.remove();
        })
      // }, 80);
      const pointer = document.createElement('div');
      pointer.className = "cursor";
      pointer.style.left = `${x}px`;
      pointer.style.top = `${y}px`;
      mainscreen.appendChild(pointer);
    }

    window.onmousemove = e => followCursor(e.clientX, e.clientY);
  }, [])
  return (
    <>
      <Head>
        <title>Devdutt's Portfolio</title>
        <meta name="description" content="Devduttsinh chudasama's portfolio" />
        <meta name="description" content="Devdutt's portfolio" />
        <meta name="description" content="Chudasama's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_svg.svg" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
