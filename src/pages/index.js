import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState, useContext, createContext } from 'react'
import Input from '@/components/Input'

export const ComponentContext = createContext();
export const HistoryContext = createContext();

export default function Home() {
  const [components, setComponents] = useState([]);
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //     const followCursor = (x, y) => {
  //     const mainscreen = document.querySelector(`.${styles.main}`);
  //     const pointer = document.createElement('div');
  //     pointer.className = "cursor";
  //     pointer.style.left = `${x}px`;
  //     pointer.style.top = `${y}px`;
  //     mainscreen.appendChild(pointer);
  //     setTimeout(() => mainscreen.removeChild(pointer), 200);
  //   }
  //   window.onmousemove = e => followCursor(e.clientX, e.clientY);
  // }, [])

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
      <HistoryContext.Provider value={{history, setHistory}}>
        <ComponentContext.Provider value={{components, setComponents}}>
          <div className={styles.main}>
            <main>
              <Input />
              {
                components.map((component, index) => {
                  return (
                    <React.Fragment key={index}>
                      {component}
                    </React.Fragment>
                  )
                })
              }
            </main>
          </div>
      </ComponentContext.Provider>
      </HistoryContext.Provider>
    </>
  )
}
