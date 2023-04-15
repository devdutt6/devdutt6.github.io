import Head from 'next/head'
import StaticInput from '@/components/StaticInput'
import React, { useEffect, useState, createContext } from 'react'
import { focusInput, ctrlL } from "@/utils/functions"
import Wrapper from '@/components/Wrapper'

export const ComponentContext = createContext()

export default function Home() {
  const [components, setComponents] = useState([])
  const [history, setHistory] = useState(['welcome'])

  useEffect(() => {
    window.addEventListener('mouseup', focusInput)
    window.addEventListener('keydown', (e) => ctrlL(e))
  }, [])

  const styles = {
    main: {
      backgroundColor: 'var(--background-dark)',
      minWidth: 'min(1920px, 100vw)',
      minHeight: 'min(1080px, 100vh)',
      maxWidth: 'min(1920px, 100vw)',
      maxHeight: 'min(1080px, 100vh)',
      overflowX: 'hidden',
    }
  }

  // TODO: resume, workexp, tab thing complette, extra command remove
  return (
    <>
      <Head>
        <title>Devdutt Chudasama | Terminal Portfolio</title>
        <meta name="title" content="Devdutt Chudasama - Terminal Portfolio" />
        <meta name="description" content="I am Devdutt Chudasama a Software Developer and this is my terminal portfolio, I mostly work on MERN stack." />
        {/*  and when i feel bored i prefer to learn something. */}
        <meta name="keywords" content="devdutt, devduttsinh, devduttchudasama, chudasama, portfolio, terminal, terminal portfolio, devdutt portfolio" />
        <meta name='robots' content='index/follow' />
        <meta property="og:title" content="Devdutt terminal portfolio" />
        <meta property="og:description" content="devdutt's terminal portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devdutt6-github-io.vercel.app/" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/973468331610894337/1096685251864047656/Screenshot_9.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ComponentContext.Provider value={{components, setComponents, history, setHistory}}>
        <div style={styles.main}>
          <main>
            <Wrapper component={<StaticInput />} />
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
    </>
  )
}
