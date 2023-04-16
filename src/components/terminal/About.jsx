const About = () => {

  const LINES = [
    {
      line: "Hi, my name is Devdutt!"
    },
    {
      line: "I'm Software Developer/full-stack developer based in Gujarat."
    },
    {
      line: "I love playing volleyball and in competitive in nature."
    },
    {
      line: "Currently focusing on developing problem solving skill with DSA(Data Structures and Algorithms)."
    },
  ]

  const styles = {
    line: {
      padding: "8px 0px",
    },
    section: {
      width: "100%",
      fontSize: "1.1em",
      color: "var(--title-main)"
    }
  }

  return (
    <div style={styles.section}>
      {
        LINES.map((line, index) => {
          return (
            <p key={index} style={styles.line}>
              {line.line}
            </p>
          )
        })
      }
    </div>
  )
}

export default About