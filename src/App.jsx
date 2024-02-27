import cake from "./assets/strawberry-cake.jpg";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.text}>Happy Birthday Sam Thomas</div>
        <div>
          <img className={styles.cake} src={cake} alt="first" />
        </div>
      </div>
      <div className={styles.buttonPage}>
        <button className={styles.button} onClick={() => navigate("/memories")}>
          Click Me!
        </button>
        <button className={styles.button} onClick={() => navigate("/memories")}>
          Click Me!
        </button>
        <button className={styles.button} onClick={() => navigate("/memories")}>
          Click Me!
        </button>
      </div>
      <div></div>
    </>
  );
}

export default App;
