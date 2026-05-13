export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} My Quiz. All rights reserved.
      </p>
    </footer>
  )
}

const styles = {
  footer: {
    marginTop: "auto",
    padding: "1rem",
    background: "#222",
    textAlign: "center",
  },
  text: {
    color: "white",
    margin: 0,
    fontSize: "0.9rem",
  },
}