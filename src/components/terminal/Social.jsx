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

  const styles = {
    section: {
      width: "100%",
      padding: "8px 0px",
    },
    item: {
      padding: "4px 0px",
      fontSize: '1.1em',
    },
    green: {
      color: 'var(--cursor-color)'
    },
    nodecoration: {
      textDecoration : 'none',
      fontSize: 'inherit',
      color: 'var(--tag-high)'
    }
  }

  return (
      <ul style={styles.section}>
        {
          accounts.map((account, index) => {
            return (
              <li
              key={index}
              style={styles.item}>
                {index+1}.&nbsp;
                <a
                href={account.link}
                target="_blank"
                style={styles.nodecoration}>
                  <span style={styles.green}>
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