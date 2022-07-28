import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Link className="label-text" to="/">Home</Link>
      <Link to="pokedex">List</Link>
      <Link to="about">About</Link>
    </nav>
  );
}
