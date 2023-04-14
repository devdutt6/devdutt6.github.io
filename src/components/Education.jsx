import Input from "./Input";
import styles from "@/styles/Invalid.module.css";

const Education = () => {
  const education = [
    {
      title: "Bachelors of Engineering in Computer Science",
      description: "Gujarat Technological University",
      duration: "2018 ~ 2022",
      grade: "8.7/10.0"
    }
  ]

  return(
    <>
    <br/>
    <div className={styles.section}>
      Here is my education background!
      <div className={styles.group}>
        {
          education.map(ed => {
            return (
              <>
              <div className={styles.divide}>
                <p className={styles.title}>{ed.title}</p>
                <p className={styles.title}>{ed.grade}</p>
              </div>
              <div className={styles.divide}>
                <p>{ed.description}</p>
                <p>{ed.duration}</p>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
    <Input />
    </>
  )
}

export default Education;