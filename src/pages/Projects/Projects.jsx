import { useOutletContext } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  const [lightMode] = useOutletContext();

  const red = lightMode ? "#B71C1C" : "#FF1744";

  const projects = [
    {
      title: "Saccharo – Charity Food Donation System",
      stack: "PHP, MySQL, JavaScript, HTML, CSS",
      link: "https://github.com/aamalrxj/Saccharo-Website",
      images:
        "https://drive.google.com/drive/folders/1ZtPH9tkdPNmNIx1IrEp64tXsT99l2c4f?usp=drive_link",
      bullets: [
        "Built a web-based application to connect food donors and NGOs.",
        "Designed a responsive front-end for users to easily list and track donations.",
        "Developed back-end systems for data handling and user authentication.",
      ],
    },

    {
      title: "Lung Nodule Detection using Deep Learning",
      stack: "Python, TensorFlow, OpenCV, Flask, HTML, CSS",
      link: "https://github.com/aamalrxj/Lung-Node-Detection.git",
      images:
        "https://drive.google.com/drive/folders/1ajYSxSFZLrVO-YtfHP58FyAfh1dxOPRz?usp=drive_link",
      bullets: [
        "Developed a deep learning (CNN) system for automated lung nodule detection and classification from chest CT scans.",
        "Achieved 93.7% validation accuracy in classifying images as benign, malignant, or no nodule",
        "Deployed as a web app using Flask for real-time image upload and result display",
      ],
    },

    {
      title: "AI Powered Job Match Platform",
      stack: "Node.js, Express, PostgreSQL, OpenAI API",
      link: "https://github.com/aamalrxj/AI-Powered-Job-Match-Platform.git",
      images:
        "https://drive.google.com/drive/folders/1SG8-QjdN-lWaxnOQ0Tar7CSJ3yDIx0An?usp=drive_link",
      bullets: [
        "Developed an IT Job Search Platform: A full-stack web application for IT job seekers to search, filter, and discover jobs using both live job APIs and AI-powered recommendations",
      ],
    },

    {
      title: "Message App",
      stack: "React, Express, HTML, CSS",
      link: "https://github.com/aamalrxj/msg.git",
      images:
        "https://drive.google.com/drive/folders/19NrI5FjyhyZ37mgjkoYAgGDEN63iAuvL?usp=drive_link",
      bullets: [
        "A simple message app to send hidden messages with a hidden code and recieve them.",
        "The messages are send with a self destructing timer",
      ],
    },

    {
      title: "Quiz App",
      stack: "React, Express",
      link: "https://github.com/aamalrxj/Quiz-Web.git",
      images:
        "https://drive.google.com/drive/folders/1jwbaXaMYwdSrmtn1iplWx_QlcRupUuCj?usp=drive_link",
      bullets: [
        "Helps you prepare for exams by creating quiz for you and also short notes. All you have to do is upload pdf.",
      ],
    },

    {
      title: "Tour Guide",
      stack: "React 19, Vite, Tailwind",
      link: "https://github.com/aamalrxj/tour-web.git",
      images:
        "https://drive.google.com/drive/folders/1SfzAo8qQShq5WyLVCocegIR2dn3lFK6x?usp=drive_link",
      bullets: [
        "Simple tour guide website.",
      ],
    },

    {
      title: "Movie Suggester",
      stack: "React, Express",
      link: "https://github.com/aamalrxj/move-sugg.git",
      images:
        "https://drive.google.com/file/d/13JYIKDQiLG9ahNgeQgDfIYUaOc_LRGMX/view?usp=drive_link",
      bullets: [
        "Movie recommendation platform.",
      ],
    },

    {
      title: "Simple E-Commerce Website",
      stack: "React, Express, MySQL",
      link: "https://github.com/aamalrxj/e-commerce.git",
      images:
        "https://drive.google.com/drive/folders/1mvMDNId6hr1iYiFv9wqexB2GS5UmYu0y?usp=drive_link",
      bullets: [
        "A full-stack mini eCommerce simulation built with React.js (frontend), Node.js/Express (backend), and MySQL.",
      ],
    },

    {
      title: "Sample Entertainment Platform",
      stack: "React, Express, MySQL",
      link: "https://github.com/aamalrxj/Ent-Plat.git",
      images:
        "https://drive.google.com/drive/folders/1CsHAmT4tSwMR1DGLGZLqN-DTnAuB46PT?usp=drive_link",
      bullets: [
        "A full-stack video sharing platform, featuring: User registration, login, and logoutShort-form and long-form video uploads, Buy and gift video functionality (with money credited to creators.",
      ],
    },
  ];
    return (
    <section
      className="projects-page"
      style={{
        color: lightMode ? "#111" : "#fff",
      }}
    >
      <h1
        className="projects-title"
        style={{ color: red }}
      >
        Projects
      </h1>

      <div className="projects-container">

        {projects.map((project) => (

          <article
            key={project.title}
            className="project-card"
            style={{
              background: lightMode
                ? "rgba(0,0,0,.03)"
                : "rgba(255,255,255,.04)",

              borderColor: lightMode
                ? "#eee"
                : "#333",
            }}
          >

            <div className="project-header">

              <h2
                className="project-name"
                style={{ color: red }}
              >
                {project.title}
              </h2>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="github-link"
                style={{ color: red }}
              >
                GitHub
              </a>

            </div>

            <div
              className="project-stack"
              style={{
                color: lightMode ? "#222" : "#ddd",
                borderColor: red,
                background: lightMode ? "#fff" : "#222",
              }}
            >
              {project.stack}
            </div>

            <ul className="project-list">

              {project.bullets.map((bullet, index) => (

                <li key={index}>
                  {bullet}
                </li>

              ))}

            </ul>

            <a
              href={project.images}
              target="_blank"
              rel="noreferrer"
              className="image-btn"
              style={{
                color: red,
                borderColor: red,
              }}
            >
              View Project Images
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}