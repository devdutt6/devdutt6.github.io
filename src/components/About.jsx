import styles from "@/styles/About.module.css"

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

  return (
    <div className={styles.section}>
      {
        LINES.map((line, index) => {
          return (
            <p key={index} className={styles.line}>
              {line.line}
            </p>
          )
        })
      }
    </div>
  )
}

export default About