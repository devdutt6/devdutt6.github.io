import styles from "@/styles/Projects.module.css"

const Projects  = () => {
  const projects = [
    {
      title: 'disbot (Discord Bot)',
      description: 'A discord bot with rich features like a task management, reminders, apply for a leave, share TODT, share your status in organization, etc.',
      links: [
        {
          url: 'https://github.com/devdutt6/disbot',
          platform: 'GitHub'
        }
      ]
    },
    {
      title: 'aoctemplate',
      description: 'A npm library for one of the most followed coding compitition called \"Advent Of Code\".',
      links: [
        {
          url: 'https://github.com/devdutt6/aoctemplate',
          platform: 'GitHub'
        },
        {
          url: 'https://npmjs.com/package/aoctemplate',
          platform: 'NPM'
        },
      ]
    }
  ]

  const addPointer = (e) => {
    e.target.childNodes[0].data = `>${e.target.childNodes[0].data}`
  }
  const removePointer = (e) => {
    e.target.childNodes[0].data = e.target.childNodes[0].data.slice(1)
  }

  return (
      <ul className={styles.section}>
        {
          projects.map((project, index) => {
            return (
              <li key={index} className={styles.card}>
                <div className={styles.title}>
                  {index+1}.&nbsp;
                  {project.title}
                </div>
                <div className={styles.description}>
                  {project.description}
                </div>
                <div className={styles.flexit}>
                  {
                    project.links.map((link, ind) => {
                      return (
                        <a
                        href={link.url}
                        className={styles.nodecoration} target="_blank"
                        onMouseOver={addPointer}
                        onMouseLeave={removePointer}
                        key={ind}
                        >
                          <span>{link.platform}</span>
                        </a>
                      )
                    })
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
  )
}

export default Projects