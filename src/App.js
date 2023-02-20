import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Board from "./components/Board";

function App() {
  const dispatch = useDispatch();
  const [start, setStart] = useState(false);

  return (
    <div className="container">
      <div className="app">
        <header>
          <h2>Flip card game Memo</h2>
          <div>
            Select two cards with same content consequtively to make them vanish
          </div>
          <button
            id="button"
            onClick={() => {
              dispatch({ type: "cards/shuffleCards" });
              setStart(true);
              document.querySelector("#button").innerHTML = "Restart!";
              dispatch({ type: "moves/restart" });
            }}
          >
            Play!
          </button>
        </header>
      </div>
      {start ? (
        <Board />
      ) : (
        <div className="rules">
          <h3> Rules:</h3>
          <ul>
            <li>
              The game starts with all the cards face down and players take
              turns to turn over two cards.
            </li>
            <li>
              If the two cards have the same picture, then they keep the cards
              and get a point, otherwise they turn the cards face down again.
            </li>
            <li>
              The winner is the person with the most points when all the cards
              have been taken.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
