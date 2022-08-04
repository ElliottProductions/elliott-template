import stylez from './BunTags.css';
import styles from './List.css';

export default function BunTags({ bunnies }) {
  return (
    <>
      <ul className={stylez.BunnyTags}>
        {bunnies.map((bunny) => (
          <li className={styles.Bunny} key={bunny.id}>
            <h3 className={styles.bunnyname}>{bunny.name}</h3>
            <button className={styles.FormButton}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
