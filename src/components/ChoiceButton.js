export default function ChoiceButton({ children, onChoice }) {
  return (
    <button className="choice__button" onClick={() => onChoice(children)}>
      {children}
    </button>
  );
}
