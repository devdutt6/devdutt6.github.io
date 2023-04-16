import { generateSpaces } from "@/utils/functions"

const Help = () => {
  const helper = [
    {
      command: "about",
      description: "about Devdutt",
      tab: 8
    },
    {
      command: "education",
      description: "my education background",
      tab: 4
    },
    {
      command: "projects",
      description: "personal projects",
      tab: 5
    },
    {
      command: "socials",
      description: "check out my social accounts",
      tab: 6
    },
    {
      command: "help",
      description: "check available commands",
      tab: 9
    },
    {
      command: "theme",
      description: "toggle between different themes",
      tab: 8
    },
    {
      command: "welcome",
      description: "display hero section",
      tab: 6
    },
    // {
    //   command: "resume",
    //   description: "here is my resume",
    //   tab: 7
    // },
    {
      command: "pwd",
      description: "print current working directory",
      tab: 10
    },
    {
      command: "echo",
      description: "print out anything",
      tab: 9
    },
    {
      command: "clear",
      description: "clear the terminal",
      tab: 8
    },
    {
      command: "whoami",
      description: "about current user",
      tab: 7
    },
    // {
    //   command: "email",
    //   description: "send an email to me",
    //   tab: 8
    // },
    // {
    //   command: "experience",
    //   description: "my past experience",
    //   tab: 3
    // },
  ]

  const styles = {
    list: {
      fontSize: "1.1em",
      color: "var(--title-main)",
    },
    padded: {
      padding: "2px 0px"
    },
    green: {
      display: "inline",
      color: "var(--cursor-color)",
    },
    normal: {
      display: "inline",
    },

  }

  return (
      <dl style={styles.list}>
      <br />
      {
        helper.map((manual, index) => {
          return (
            <div key={index} style={styles.padded}>
              <dt style={styles.green}>
                {manual.command}{generateSpaces(manual.tab)}
              </dt>
              -&nbsp;
              <dd style={styles.normal}>
                {manual.description}
              </dd>
              <br />
            </div>
          )
        })
      }
      <br />
      </dl>
  )
}

export default Help