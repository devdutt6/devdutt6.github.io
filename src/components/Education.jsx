const Education = () => {
  const education = [
    {
      title: "Bachelors of Engineering in Computer Science",
      description: "Gujarat Technological University",
      duration: "2018 ~ 2022",
      grade: "8.7/10.0"
    },
    {
      title: "H.S.C.",
      description: "Gujarat School Education Board",
      duration: "2016 ~ 2018",
      grade: "86/100"
    }
  ]

  const styles = {
    section: {
      color: "var(--title-main)",
      fontSize: "1.1em",
    },
    group: {
      padding: "12px 0px",
      width: "50%",
    },
    divide: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: "700",
      color: "var(--tag-high)",
    },
  }

  return(
    <>
    <br/>
    <div style={styles.section}>
      Here is my education background!
      <div>
        {
          education.map((ed, index) => {
            return (
              <div style={styles.group} key={index}>
                <div style={{...styles.divide, ...styles.title}}>
                  <p style={{color: 'inherit'}}>{ed.title}</p>
                  <p style={{color: 'inherit'}}>{ed.grade}</p>
                </div>
                <div style={styles.divide}>
                  <p>{ed.description}</p>
                  <p>{ed.duration}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Education