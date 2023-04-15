const Invalid = ({command}) => {
  const PRE =
`
\`
`
  const styles = {
    section: {
      fontSize: '1.1em',
      padding: "8px 0px",
    },
    grey: {
      padding: "8px 0px",
      color: 'var(--para-text)'
    },
    green: {
      padding: "8px 0px",
      color: 'var(--cursor-color)'
    }
  }

  return (
    <div style={styles.section}>
      <span style={styles.grey}>
        {command}
      </span>
      : command not found,
      <pre>
        {PRE}
      </pre>
      For the list of available command, type `
      <span style={styles.green}>
        help
      </span>
      `.
    </div>
  )
}

export default Invalid;