import styles from "@/styles/Invalid.module.css"

const Echo = ({text}) => {
  return (
    <div className={styles.padded}>
      {text}
    </div>
  )
}

export default Echo;