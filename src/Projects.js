import { useOutletContext } from 'react-router-dom';

export default function ProjectsPage() {
  const [lightMode] = useOutletContext();
  const red = lightMode ? '#B71C1C' : '#FF1744';

  const projects = [
    {
      title: 'Saccharo– Charity Food Donation System',
      stack: 'PHP, MySQL, JavaScript, HTML, CSS',
      link: 'https://github.com/aamalrxj/Saccharo-Website',
      images: 'https://drive.google.com/drive/folders/1ZtPH9tkdPNmNIx1IrEp64tXsT99l2c4f?usp=drive_link', // <-- Add your images link here
      bullets: [
        'Built a web-based application to connect food donors and NGOs.',
        'Designed a responsive front-end for users to easily list and track donations.',
        'Developed back-end systems for data handling and user authentication.',
      ],
    },
    {
      title: 'Lung Nodule Detection using Deep Learning',
      stack: 'Python, TensorFlow, OpenCV, Flask, HTML, CSS',
      link: 'https://github.com/aamalrxj/Lung-Node-Detection.git',
      images: 'https://drive.google.com/drive/folders/1ajYSxSFZLrVO-YtfHP58FyAfh1dxOPRz?usp=drive_link',
      bullets: [
        'Developed a deep learning (CNN) system for automated lung nodule detection and classification from chest CT scans.',
        'Achieved 93.7% validation accuracy in classifying images as benign, malignant, or no nodule.',
        'Deployed as a web app using Flask for real-time image upload and result display.',
      ],
    },
    {
      title: 'AI Powered Job Match Platform',
      stack: 'Node.js, Express, Axios, dotenv, PostgreSQL, OpenAI GPT-3.5/4 API',
      link: 'https://github.com/aamalrxj/AI-Powered-Job-Match-Platform.git',
      images: 'https://drive.google.com/drive/folders/1SG8-QjdN-lWaxnOQ0Tar7CSJ3yDIx0An?usp=drive_link',
      bullets: [
        'Developed an IT Job Search Platform: A full-stack web application for IT job seekers to search, filter, and discover jobs using both live job APIs and AI-powered recommendations.',
      ],
    },
    {
      title: 'Message-App',
      stack: 'React, Express, HTML, CSS, JSX',
      link: 'https://github.com/aamalrxj/msg.git',
      images: 'https://drive.google.com/drive/folders/19NrI5FjyhyZ37mgjkoYAgGDEN63iAuvL?usp=drive_link',
      bullets: [
        'A simple message app to send hidden messages with a hidden code and recieve them.',
        'The messages are send with a self destructing timer',
      ],
    },
    {
      title: 'Quiz App',
      stack: 'React, Express, HTML, CSS, JSX',
      link: 'https://github.com/aamalrxj/Quiz-Web.git',
      images: 'https://drive.google.com/drive/folders/1jwbaXaMYwdSrmtn1iplWx_QlcRupUuCj?usp=drive_link',
      bullets: [
        'Helps you prepare for exams by creating quiz for you and also short notes. All you have to do is upload pdf',
      ],
    },
    {
      title: 'Tour Guide',
      stack: 'React 19, Vite, Tailwind CSS',
      link: 'https://github.com/aamalrxj/tour-web.git',
      images: 'https://drive.google.com/drive/folders/1SfzAo8qQShq5WyLVCocegIR2dn3lFK6x?usp=drive_link',
      bullets: [
        'Just a simple tour guide website',
      ],
    },
    {
      title: 'Movie Suggester',
      stack: 'React, Express, HTML, CSS, JSX',
      link: 'https://github.com/aamalrxj/move-sugg.git',
      images: 'https://drive.google.com/file/d/13JYIKDQiLG9ahNgeQgDfIYUaOc_LRGMX/view?usp=drive_link',
      bullets: [
        'Suggests you movies to watch according to the category and language.',
      ],
    },
    {
      title: 'Simple E-Commerce Website',
      stack: 'React.js, Axios, Node.js, Express, MySQL',
      link: 'https://github.com/aamalrxj/e-commerce.git',
      images: 'https://drive.google.com/drive/folders/1mvMDNId6hr1iYiFv9wqexB2GS5UmYu0y?usp=drive_link',
      bullets: [
        'A full-stack mini eCommerce simulation built with React.js (frontend), Node.js/Express (backend), and MySQL.',
      ],
   },
     {
      title: 'Sample Entertainment Platform',
      stack: 'React.js, Axios, Node.js, Express, MySQL',
      link: 'https://github.com/aamalrxj/Ent-Plat.git',
      images: 'https://drive.google.com/drive/folders/1CsHAmT4tSwMR1DGLGZLqN-DTnAuB46PT?usp=drive_link',
      bullets: [
        'A full-stack video sharing platform, featuring: User registration, login, and logoutShort-form and long-form video uploads, Buy and gift video functionality (with money credited to creators'
      ],
   },
  ];


  return (
    <div
      style={{
        color: lightMode ? '#000' : '#fff',
        fontFamily: "'Quicksand', sans-serif",
        padding: '2.5rem 0',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: red, fontSize: '2.3rem', marginBottom: '2rem' }}>
        Projects
      </h1>
      {projects.map((proj, idx) => (
        <div
          key={proj.title}
          style={{
            marginBottom: '2.2rem',
            padding: '1.5rem 1.5rem 1.5rem 1.2rem',
            background: lightMode ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)',
            borderRadius: '1.1em',
            border: `1.5px solid ${lightMode ? '#eee' : '#333'}`,
            boxShadow: lightMode
              ? '0 2px 12px rgba(0,0,0,0.04)'
              : '0 2px 12px rgba(255,255,255,0.03)',
            transition: 'all 0.3s',
          }}
        >
          {/* Title row: Project name left, link right */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem',
            flexWrap: 'wrap',
          }}>
            <h2 style={{ color: red, fontSize: '1.35rem', margin: 0 }}>
              {proj.title}
            </h2>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: red,
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'underline',
                marginLeft: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              Link
            </a>
          </div>
          {/* Stack below project name */}
          <div
            style={{
              fontSize: '0.98rem',
              color: lightMode ? '#333' : '#ccc',
              fontWeight: 500,
              background: lightMode ? '#fff' : '#222',
              borderRadius: '1em',
              padding: '0.2em 0.9em',
              border: `1px solid ${red}`,
              margin: '0.7rem 0 0.2rem 0',
              display: 'inline-block',
            }}
          >
            {proj.stack}
          </div>
          <ul style={{ margin: '1.1rem 0 0 0', paddingLeft: '1.5rem', lineHeight: 1.7, fontSize: '1.08rem' }}>
            {proj.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {/* View Images link at the end */}
     <div style={{ marginTop: '1.1rem', display: 'flex', alignItems: 'center' }}>
  <a
    href={proj.images}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${red}`,
      borderRadius: '2em',
      padding: '0.45em 1.5em',
      background: 'transparent',
      color: red,
      fontWeight: 700,
      fontSize: '1.05rem',
      textDecoration: 'none',
      transition: 'background 0.2s, color 0.2s, border 0.2s',
      boxShadow: lightMode
        ? '0 2px 8px rgba(183,28,28,0.08)'
        : '0 2px 8px rgba(255,23,68,0.12)',
      cursor: 'pointer',
      textAlign: 'center',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = red;
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = red;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = red;
      e.currentTarget.style.borderColor = red;
    }}
    aria-label="View Project Images"
  >
    View Project Images
  </a>
</div>

        </div>
      ))}
    </div>
  );
}
