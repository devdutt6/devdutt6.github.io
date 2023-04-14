import Head from 'next/head'
import styles from '@/styles/Home.module.css'
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

  // TODO: resume, workexp, welcome fullsatck, welcome static first time, tab thing complette, alt+l, extra command remove
  return (
    <>
      <Head>
        <title>Devdutt's Portfolio</title>
        <meta name="description" content="Devduttsinh chudasama's portfolio" />
        <meta name="description" content="Devdutt's portfolio" />
        <meta name="description" content="Chudasama's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ComponentContext.Provider value={{components, setComponents, history, setHistory}}>
        <div className={styles.main}>
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
