import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Quiz</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "#222",
  },
  logo: {
    color: "white",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
}