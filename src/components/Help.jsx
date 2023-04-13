import Input from "./Input";
import styles from "@/styles/Help.module.css";
import generateSpaces from "@/utils/generateSpaces";

const Help = () => {
  const helper = [
    { command: "about", description: "about Devdutt", tab: 8 },
    { command: "clear", description: "clear the terminal", tab: 8 },
    { command: "echo", description: "print out anything", tab: 9 },
    { command: "education", description: "my education background", tab: 4 },
    { command: "email", description: "send an email to me", tab: 8 },
    { command: "experience", description: "my past experience", tab: 3 },
    { command: "help", description: "check available commands", tab: 9 },
    { command: "history", description: "view command history", tab: 6 },
    { command: "projects", description: "personal projects", tab: 5 },
    { command: "pwd", description: "print current working directory", tab: 10 },
    { command: "skills", description: "tech and non-tech skills", tab: 7 },
    { command: "socials", description: "check out my social accounts", tab: 6 },
    { command: "welcome", description: "display hero section", tab: 6 },
    { command: "whoami", description: "about current user", tab: 7 },
  ]

  return (
    <>
      <dl className={styles.list}>
      <br />
      {
        helper.map(manual => {
          return (
            <div className={styles.padd}>
              <dt className={styles.green}>{manual.command}{generateSpaces(manual.tab)}</dt>
              -&nbsp;<dd className={styles.normal}>{manual.description}</dd>
            <br />
            </div>
          )
        })
      }
      <br />
      </dl>
      <Input />
    </>
  )
}

export default Help;