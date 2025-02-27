export default function ScoreDisplay({ score, winner }) {
  return (
    <div className="score">
      <h2>Score: {score}</h2>
      <p>
        {winner === "player" && "You win 🎉"}
        {winner === "computer" && "You lose 😔"}
        {winner === "tie" && "It's a tie 🤝"}
      </p>
    </div>
  );
}
