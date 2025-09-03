import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entienda como funciona la técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Hecho con 💚​
      </a>
    </footer>
  );
}
