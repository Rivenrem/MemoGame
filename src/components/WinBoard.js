import { useSelector } from "react-redux";
import styles from "./winBoard.module.scss";

export default function WinBoard() {
  const moves = useSelector((state) => state.moves.count);
  return (
    <div className={styles.board}>
      <div className={styles["board__message"]}>
        <h3>You did it ! 🥳</h3>

        <p>Youre score is: {moves}</p>

        {localStorage.getItem("bestScore") && (
          <p>Best score is: {localStorage.getItem("bestScore")}</p>
        )}
      </div>
    </div>
  );
}
