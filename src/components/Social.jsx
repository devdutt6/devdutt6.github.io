import Input from "./Input";
import styles from "@/styles/Social.module.css";
import generateSpaces from "@/utils/generateSpaces";

const accounts = [
  {
    platform: "GitHub",
    link: "https://github.com/devdutt6/",
    tabs: 7
  },
  {
    platform: "LinkedIn",
    link: "https://linkedin.com/in/devduttsinh/",
    tabs: 5
  },
  {
    platform: "Instagram",
    link: "https://instagram.com/devdutt_vamp/",
    tabs: 4
  },
]

const Social = () => {
  return (
    <>
      <ul className={styles.list}>
        {
          accounts.map((account, index) => {
            return (
              <li className={styles.item}>
                {index+1}.&nbsp;
                <a href={account.link} target="__blank" className={styles.nodecoration}><span className={styles.green}>{account.platform}</span></a>
                {generateSpaces(account.tabs)}-&nbsp;
                <a href={account.link} className={styles.nodecoration} target="__blank">
                  {account.link}
                </a>
              </li>
            )
          })
        }
      </ul>
      <Input />
    </>
  )
}

export default Social;