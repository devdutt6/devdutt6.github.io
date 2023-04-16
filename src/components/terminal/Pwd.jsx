const Pwd = () => {
  const styles = {
    section: {
      fontSize: '1.1em',
      padding: '8px 0px',
    },
    green: {
      color: 'var(--cursor-color)',
    }
  }
  return (
    <div style={styles.section}>
      <span style={styles.green}>Path</span><br />
      <span style={styles.green}>----</span><br />
      /home/devdutt/portfolio
    </div>
  )
}

export default Pwd;