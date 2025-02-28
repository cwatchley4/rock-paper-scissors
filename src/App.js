import { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import ScoreDisplay from "./components/ScoreDisplay";
import PlayAgainButton from "./components/PlayAgainButton";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(0);

  function handleChoice(children) {
    const choices = ["rock", "paper", "scissors"];

    setPlayerChoice(children);
    setTimeout(() => {
      const compChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(compChoice);
      setTimeout(() => {
        if (children === compChoice) {
          setWinner("tie");
        } else if (
          (children === "rock" && compChoice === "scissors") ||
          (children === "paper" && compChoice === "rock") ||
          (children === "scissors" && compChoice === "paper")
        ) {
          setWinner("player");
          setScore((prev) => prev + 1);
        } else {
          setWinner("computer");
          setScore((prev) => prev - 1);
        }
      }, 1000);
    }, 1000);
  }

  function handlePlayAgain() {
    setComputerChoice(null);
    setPlayerChoice(null);
    setWinner(null);
  }

  return (
    <div className="app__container">
      <Header />
      <GameBoard
        onChoice={handleChoice}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      />
      <ScoreDisplay score={score} winner={winner} />
      <PlayAgainButton onPlayAgain={handlePlayAgain} />
    </div>
  );
}
