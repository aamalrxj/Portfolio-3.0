import { useOutletContext } from "react-router-dom";
import "./About.css";

export default function AboutPage() {
  const [lightMode] = useOutletContext();

  const red = lightMode ? "#B71C1C" : "#FF1744";

  return (
    <section className="about-page">

      <div className="about-left">

        <h1
          className="about-title"
          style={{ color: red }}
        >
          About Me
        </h1>

        <h2
          className="about-name"
          style={{ color: lightMode ? "#111" : "#fff" }}
        >
          I am Amal Raj Praseena
          <br />
          Sajeeve
        </h2>

        <h3
          className="about-role"
          style={{ color: red }}
        >
          Master's Student in Computer Application
        </h3>

        <p
          className="about-description"
          style={{ color: lightMode ? "#111" : "#fff" }}
        >
          A highly skilled and versatile software developer specializing in
          web development (front-end and back-end), Python programming,
          and SQL database management. Proficient in modern web frameworks,
          I deliver responsive, scalable, and user-friendly applications.
          Strong experience in back-end development using Python together
          with MySQL, PostgreSQL and MongoDB. Passionate about leveraging
          technology to solve real-world problems.
        </p>

      </div>

      <div
        className="about-divider"
        style={{
          background: lightMode ? "#ddd" : "#333",
        }}
      ></div>

      <div
        className="skills-card"
        style={{
          background: lightMode
            ? "#fafafa"
            : "rgba(255,255,255,.03)",

          borderColor: lightMode
            ? "#ddd"
            : "#333",

          color: lightMode
            ? "#111"
            : "#fff",
        }}
      >

        <h2
          className="skills-title"
          style={{ color: red }}
        >
          Skills
        </h2>

        <div className="skill-group">

          <h4>Web Development</h4>

          <div className="skill-grid">
            <ul>
            <li>React.js, Angular, Node.js, Express.js</li>
            <li>HTML, CSS, JavaScript, Bootstrap, PHP</li>
            </ul>
          </div>

        </div>

        <div className="skill-group">

          <h4>Languages</h4>

          <div className="skill-grid">
            <li>Python, Java, SQL (MySQL, PostgreSQL, MongoDB)</li>
          </div>

        </div>

        <div className="skill-group">

          <h4>Developer Tools</h4>

          <div className="skill-grid">

          <li>Git, GitHub, VS Code, XAMPP, Android Studio, Webpack, NPM</li>
          </div>

        </div>

        <div className="skill-group">

          <h4>Libraries</h4>

          <div className="skill-grid">

            <li>Pandas, NumPy, Matplotlib</li>

          </div>

        </div>

      </div>

    </section>
  );
}