import Head from 'next/head'
import { Ubuntu_Mono } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import Input from '@/components/Input'

const inter = Ubuntu_Mono({ subsets: ['latin'], style: 'normal', weight: "400" })

export default function Home() {
  useEffect(() => {
    const followCursor = (x, y) => {
      const mainscreen = document.querySelector(`.${styles.main}`);
      const pointer = document.createElement('div');
      pointer.className = "cursor";
      pointer.style.left = `${x}px`;
      pointer.style.top = `${y}px`;
      mainscreen.appendChild(pointer);
      setTimeout(() => mainscreen.removeChild(pointer), 200);
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
      <div className={`${styles.main} ${inter.className}`}>
        <main>
          <Input />
        </main>
      </div>
    </>
  )
}
