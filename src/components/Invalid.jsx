
import styles from '@/styles/Invalid.module.css'
import styles2 from '@/styles/Welcome.module.css'

const Invalid = ({command}) => {
  const PRE =
`
\`
`
  return (
    <>
      <br/>
      <div className={styles.section}>
        <span
        className={styles2.grey + " " + styles2.line}>
          {command}
        </span>
        : command not found,
        <pre>
          {PRE}
        </pre>
        For the list of available command, type `
        <span className={styles2.green + " " + styles2.line}>
          help
        </span>
        `.
      </div>
      <br/>
    </>
  )
}

export default Invalid;