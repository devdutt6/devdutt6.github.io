import styles from "@/styles/Welcome.module.css"
import { NAME, PHOTO } from "@/utils/constants"
import React from "react"

const Welcome = () => {
  const LINES = [
    {
      line: "Welcome to my terminal portfolio.  (Version 1.0.0)"
    },
    {
      line: "----"
    },
    {
      line: "I'm Software developer having expertice in MERN stack."
    },
  ]

  return (
  <>
    <br/>
    <div className={styles.pre}>
      <div>
        <pre>
          {NAME}
        </pre>
        <br/>
        {
          LINES.map((line, index) => {
            return (
              <React.Fragment key={index}>
              <p className={styles.line}>
                {line.line}
              </p>
              <br />
              </React.Fragment>
            )
          })
        }
        <p className={styles.line}>
        For the list of available commands, type `
          <span className={styles.green}>
            help
          </span>
        `.
        </p>
        <br />
      </div>
      <div className={styles.photo}>
        <pre>
          {PHOTO}
        </pre>
      </div>
    </div>
    <br/>
  </>
  )
}


export default Welcome;