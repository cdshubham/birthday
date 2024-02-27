import { ParticularPhoto } from "./ParticularPhoto";
import styles from "./Photos.module.css";

const photos = ["1", "2", "3", "4", "5", "6", "7"];
export function Photos() {
  return (
    <div className={styles.page}>
      {photos.map((photo, i) => (
        <ParticularPhoto src={photo} key={i} />
      ))}
    </div>
  );
}
