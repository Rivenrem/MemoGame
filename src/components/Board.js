import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./Card";
import WinBoard from "./WinBoard";
import { delayedHiddenCards, delayedCleanOpenCards } from "../store/movesSlice";
import styles from "./board.module.scss";

export default function Board() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const openCards = useSelector((state) => state.moves.openCards);
  const moves = useSelector((state) => state.moves.count);
  const hiddenCards = useSelector((state) => state.moves.hiddenCards);

  const handleCardClick = (index, id) => {
    if (openCards.length === 2) return;

    dispatch({ type: "moves/flippId", payload: id });
    dispatch({ type: "moves/openCards", payload: index });

    if (openCards.length === 1) {
      dispatch({ type: "moves/increaseCount" });
    }
  };

  useEffect(() => {
    if (openCards.length < 2) return;

    if (openCards[0] === openCards[1]) {
      dispatch(delayedHiddenCards({ payload: openCards[1] }));
    }

    dispatch(delayedCleanOpenCards());
  }, [openCards]);

  useEffect(() => {
    if (hiddenCards.length !== 6) return;
    localStorage.setItem("bestScore", moves);
  }, [hiddenCards]);

  return (
    <>
      {hiddenCards.length === 6 && <WinBoard />}

      <div className={styles.board}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              id={index}
              card={card}
              index={card.type}
              onClick={handleCardClick}
            />
          );
        })}
      </div>

      <div className={styles.score}>{moves} moves</div>
    </>
  );
}
