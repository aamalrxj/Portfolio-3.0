import { useOutletContext } from 'react-router-dom';

export default function AboutPage() {
  const [lightMode] = useOutletContext();
  const red = lightMode ? '#B71C1C' : '#FF1744';
  const contentColor = lightMode ? '#000' : '#fff';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '60vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3vw',
        padding: '3rem 6vw',
        boxSizing: 'border-box',
        transition: 'color 0.3s',
      }}
    >
      {/* Left: About Me */}
      <div
        style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minWidth: 0,
          paddingRight: '2vw',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1.2rem', color: red }}>About Me</h1>
        <div style={{ 
          fontWeight: 800, 
          fontSize: '2.3rem', 
          color: contentColor, 
          marginBottom: '0.5rem', 
          letterSpacing: '1px' 
        }}>
          I am Amal Raj Praseena Sajeeve
        </div>
        <div style={{ 
          fontWeight: 600, 
          fontSize: '1.25rem', 
          color: red, 
          marginBottom: '2rem', 
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          MASTER&apos;S STUDENT IN COMPUTER APPLICATION
        </div>
        <p
          style={{
            maxWidth: '600px',
            lineHeight: '1.6',
            marginBottom: '2rem',
            fontSize: '1.15rem',
            color: contentColor,
          }}
        >
          A highly skilled and versatile software developer specializing in web development (front-end and back-end),
          Python programming, and SQL database management. Proficient in modern web frameworks, I deliver
          responsive, scalable, and user-friendly applications. Strong experience in back-end development using Python
          and databases (MySQL, PostgreSQL). Passionate about leveraging technology to solve real-world problems.        
        </p>
      </div>

      {/* Vertical Divider */}
      <div
        style={{
          width: '2px',
          background: lightMode ? '#ddd' : '#333',
          borderRadius: '2px',
          alignSelf: 'stretch',
          margin: '0 2vw',
        }}
      />

      {/* Right: Skills */}
      <div
        style={{
          flex: 1.2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: lightMode ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.03)',
          borderRadius: '1.2em',
          border: `1.5px solid ${lightMode ? '#eee' : '#333'}`,
          padding: '2.5rem 2.5rem',
          minWidth: 0,
          boxShadow: lightMode
            ? '0 2px 12px rgba(0,0,0,0.04)'
            : '0 2px 12px rgba(255,255,255,0.03)',
          transition: 'all 0.3s',
        }}
      >
        <h2 style={{ margin: '0 0 1.2rem 0', fontSize: '2rem', color: red }}>Skills</h2>
        <div style={{ marginBottom: '1.5rem', color: contentColor }}>
          <strong>Web Development:</strong>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: 1.8 }}>
            <li>React.js, Angular, Node.js, Express.js</li>
            <li>HTML, CSS, JavaScript, Bootstrap, PHP</li>
          </ul>
        </div>
        <div style={{ marginBottom: '1.5rem', color: contentColor }}>
          <strong>Languages:</strong>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: 1.8 }}>
            <li>Python, Java, SQL (MySQL, PostgreSQL, MongoDB)</li>
          </ul>
        </div>
        <div style={{ marginBottom: '1.5rem', color: contentColor }}>
          <strong>Developer Tools:</strong>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: 1.8 }}>
            <li>Git, GitHub, VS Code, XAMPP, Android Studio, Webpack, NPM</li>
          </ul>
        </div>
        <div style={{ color: contentColor }}>
          <strong>Libraries:</strong>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: 1.8 }}>
            <li>Pandas, NumPy, Matplotlib</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
