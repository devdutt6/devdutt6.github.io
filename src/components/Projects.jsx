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

  const styles = {
    section: {
      width: "60%",
      padding: "8px 0px",
      fontSize: "1.1em",
    },
    card: {
      padding: "8px 0px",
    },
    title: {
      fontWeight: '600',
      fontSize: 'inherit',
      color: 'var(--cursor-color)',
    },
    description: {
      padding: "4px 0px 4px",
      fontSize: 'inherit',
    },
    flexit: {
      display: 'flex',
      flexDirection: 'column',
      padding: '4px 0px'
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
          projects.map((project, index) => {
            return (
              <li key={index} style={styles.card}>
                <div style={styles.title}>
                  {index+1}.&nbsp;
                  {project.title}
                </div>
                <div style={styles.description}>
                  {project.description}
                </div>
                <div style={styles.flexit}>
                  {
                    project.links.map((link, ind) => {
                      return (
                        <a
                        href={link.url}
                        style={styles.nodecoration} target="_blank"
                        onMouseOver={addPointer}
                        onMouseLeave={removePointer}
                        key={ind}
                        >
                          <span style={{color: 'inherit'}}>{link.platform}</span>
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