import styles from "@/styles/Welcome.module.css"
import { NAME, PHOTO } from "@/utils/constants"

const Welcome = () => {
  const LINES = [
    {
      line: "Welcome to Devdutt Chudasama's terminal portfolio."
    },
    {
      line: "----"
    },
    {
      line: "I'm Devdutt Chudasama, a Software developer, a student, and skilled in MERN stack."
    },
  ]

  return (
  <>
    <div className={styles.pre}>
      <div>
        <pre>
          {NAME}
        </pre>
        <h1 className={styles.line}>
          {LINES[0].line}
        </h1>
        <p className={styles.line}>
          {LINES[1].line}
        </p>
        <h2 className={styles.line}>
          {LINES[2].line}
        </h2>
        <br />
        <p className={styles.line}>
          For the list of available commands, type `
            <span className={styles.green}>
              help
            </span>
          `.
        </p>
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