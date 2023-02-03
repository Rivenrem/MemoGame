import { useSelector } from "react-redux";
import styles from "./card.module.scss";
import backImage from "../images/animal-ave-bird-svgrepo-com.png";

export default function Card({ id, card, index, onClick }) {
  const hiddenCards = useSelector((state) => state.moves.hiddenCards);
  const flippId = useSelector((state) => state.moves.flippId);

  return (
    <div
      className={`
        ${styles.card}
        ${hiddenCards.includes(index) && styles.hidden}
        ${flippId.includes(id) && styles["card--flipped"]}
        `}
    >
      <img
        className={styles["card__image"]}
        src={flippId.includes(id) ? card.image : backImage}
        alt="card"
        onClick={() => {
          if (flippId[0] === id) return;
          onClick(index, id);
        }}
      />
    </div>
  );
}
