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
      line: "I'm Devdutt Chudasama, a Software developer and skilled in MERN stack."
    },
  ]

  const styles = {
    section: {
      fontSize: '1.1em',
      display: 'flex',
      padding: '8px 0px'
    },
    line: {
      padding: '8px 0px',
    },
    green: {
      color: 'var(--cursor-color)',
    },
    photo: {
      fontSize: '15px',
      display: 'flex',
      justifyContent: 'space-around',
      margin: 'auto',
    }
  }

  return (
    <div style={styles.section}>
      <div>
        <pre>
          {NAME}
        </pre>
        <h1 style={styles.line}>
          {LINES[0].line}
        </h1>
        <p style={styles.line}>
          {LINES[1].line}
        </p>
        <h2 style={styles.line}>
          {LINES[2].line}
        </h2>
        <br />
        <p style={styles.line}>
          For the list of available commands, type `
            <span style={styles.green}>
              help
            </span>
          `.
        </p>
      </div>
      <div style={styles.photo}>
        <pre>
          {PHOTO}
        </pre>
      </div>
    </div>
  )
}


export default Welcome;