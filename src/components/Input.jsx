import styles from "@/styles/Input.module.css"
import { Ubuntu_Mono } from 'next/font/google'

const inter = Ubuntu_Mono({ subsets: ['latin'], style: 'normal', weight: "400" })

const Input = () => {
  const USER = "visitor";
  const DOMAIN = "terminal.devdutt.dev"

  return (
    <div className={styles.card}>
      <span><span className={styles.orange}>{USER}</span>@<span className={styles.green}>{DOMAIN}</span>:~$&nbsp;</span>
      <input type="text" className={styles.input} />
    </div>
  )
}

export default Input;