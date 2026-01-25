const profilePhoto = new URL('../assets/janaa.jpeg', import.meta.url).href;

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img src={profilePhoto} alt="Jana Worang" style={styles.photo} />

        <div>
          <h1 style={styles.name}>Jana Cheren Cattlyn Worang</h1>

          <p style={styles.subtitle}>
            Computer Science(Information Systems) · Database Systems · Machine
            Learning
          </p>

          <p style={styles.desc}>
            Undergraduate student focusing on integrating machine learning
            techniques into real-world data scenarios.
          </p>

          <a
            href="https://drive.google.com/file/d/1RWhSY_XY-GzgzkgxrvG2KpSggs59HydY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.cvButton}
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: '4rem 0 3rem',
    borderBottom: '1px solid #eee',
    marginBottom: '3rem',
  },
  container: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  photo: {
    width: '140px',
    height: '140px',
    objectFit: 'cover' as const,
    borderRadius: '50%',
    border: '1px solid #ddd',
  },
  name: {
    marginBottom: '0.4rem',
    fontSize: '2.2rem',
  },
  subtitle: {
    color: '#444',
    fontSize: '1.05rem',
  },
  desc: {
    marginTop: '0.8rem',
    maxWidth: '600px',
    color: '#666',
    lineHeight: 1.6,
  },
  cvButton: {
    display: 'inline-block',
    marginTop: '1.2rem',
    padding: '0.6rem 1.2rem',
    border: '1px solid #111',
    borderRadius: '6px',
    textDecoration: 'none',
    color: '#111',
    fontSize: '0.9rem',
  },
};
