import styles from "@/styles/Social.module.css"
import { generateSpaces } from "@/utils/functions"

const Social = () => {

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

  return (
      <ul className={styles.list}>
        {
          accounts.map((account, index) => {
            return (
              <li
              key={index}
              className={styles.item}>
                {index+1}.&nbsp;
                <a
                href={account.link}
                target="_blank"
                className={styles.nodecoration}>
                  <span className={styles.green}>
                    {account.platform}
                  </span>
                {generateSpaces(account.tabs)}-&nbsp;
                {account.link}
                </a>
              </li>
            )
          })
        }
      </ul>
  )
}

export default Social