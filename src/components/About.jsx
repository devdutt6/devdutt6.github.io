import Input from "./Input";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <>
    <div className={styles.section}>
      <p className={styles.line}>Hi, my name is Devdutt!</p>
      <p className={styles.line}>I'm Software Developer/full-stack developer based in Gujarat.</p>
      <p className={styles.line}>I love volleyball and in competitive in nature.</p>
      <p className={styles.line}>Currently focusing on developing problem solving skill with DSA(Data structures and Algorithms).</p>
    </div>
    <Input />
    </>
  )
}

export default About;