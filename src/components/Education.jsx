import React from "react"
import styles from "@/styles/Invalid.module.css"

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

  return(
    <>
    <br/>
    <div className={styles.section}>
      Here is my education background!
      <div>
        {
          education.map((ed, index) => {
            return (
              <div className={styles.group} key={index}>
                <div className={styles.divide}>
                  <p className={styles.title}>
                    {ed.title}
                  </p>
                  <p className={styles.title}>
                    {ed.grade}
                  </p>
                </div>
                <div className={styles.divide}>
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

export default Education;