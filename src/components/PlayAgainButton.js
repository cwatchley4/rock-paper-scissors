export default function PlayAgainButton({ onPlayAgain }) {
  return (
    <button className="start-btn" onClick={onPlayAgain}>
      Play Again
    </button>
  );
}
