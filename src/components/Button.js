export default function Button({ onClick, children }) {
  return (
    <button className="start-btn" onClick={onClick}>
      {children}
    </button>
  );
}
