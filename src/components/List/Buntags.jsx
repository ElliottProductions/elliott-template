import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import stylez from './BunTags.css';
import styles from './List.css';

export default function BunTags({ bunnies }) {
  return (
    <>
      <ul className={stylez.BunnyTags}>
        {bunnies.map((bunny) => (
          <li className={styles.Bunny} key={bunny.id}>
            <h3>{bunny.name}</h3>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
