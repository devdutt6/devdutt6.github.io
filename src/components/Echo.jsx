const Echo = ({text}) => {
  const styles = {
    padded: {
      fontSize: "1.1em",
      color: "var(--title-main)",
      padding: "8px 0px"
    }
  }

  return (
    <div style={styles.padded}>
      {text}
    </div>
  )
}

export default Echo;