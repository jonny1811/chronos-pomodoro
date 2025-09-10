import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>
        Entienda como funciona la técnica pomodoro
      </Link>
      <Link to='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Hecho con 💚​
      </Link>
    </footer>
  );
}
