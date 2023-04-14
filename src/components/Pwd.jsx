import styles from "@/styles/Invalid.module.css"

const Pwd = () => {
  return (
    <>
      <br />
      <div className={styles.section}>
        <pre>
          <span className={styles.green}>Path</span><br />
          <span className={styles.green}>----</span><br />
          /home/devdutt/portfolio
        </pre>
      </div>
    </>
  )
}

export default Pwd;