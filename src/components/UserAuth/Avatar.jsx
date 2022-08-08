import styles from './UserAuth.css';

export default function Avatar({ src, username }) {
  return src ? (
    <img
      className={styles.Avatar}
      src={src}
      alt={`${username} avatar`}
    />
  ) : null;
}
