import styles from "@/styles/Input.module.css"

const Input = () => {
  const USER = "visitor";
  const DOMAIN = "terminal.devdutt.dev"

  return (
    <div className={styles.card}>
      <span>
        <span className={styles.orange}>{USER}</span>
        @<span className={styles.green}>{DOMAIN}</span>
        :~$&nbsp;
      </span>
      <input type="text" className={styles.input} />
    </div>
  )
}

export default Input;