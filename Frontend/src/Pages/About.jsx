import profileImage from "../Assets/me.jpg"

export default function AboutCard() {
  return (
    <div style={styles.card}>
      <img
        src={profileImage}
        alt="Profile"
        style={styles.image}
      />

      <div>
        <h1>About Me</h1>

        <p style={styles.text}>
          Hi! I’m Christopher, a developer with a background in C#, Blazor and AWS
        </p>

        <h2>💻 What I’m working on currently</h2>
        <ul>
          <li>Build reports based on EPR that allow users to view regulations from a country.</li>
          <li>Understanding clean coding principles like SOLID using C#</li>
          <li>Creating ETLs with T-SQL</li>
        </ul>
      </div>
    </div>
  )
}

const styles = {
  card: {
    display: "flex",
    gap: "2rem",
    maxWidth: "900px",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
}