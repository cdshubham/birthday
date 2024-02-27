import styles from "./Photos.module.css";

export function ParticularPhoto({ src }) {
  return (
    <div className={styles.photo}>
      <img className={styles.image} src={src} alt="" />
      <div>Hello</div>
    </div>
  );
}
