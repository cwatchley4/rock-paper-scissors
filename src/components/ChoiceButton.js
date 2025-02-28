export default function ChoiceButton({ children, onChoice, value }) {
  console.log(value);
  return (
    <button className="choice__button" onClick={() => onChoice(value)}>
      {children}
    </button>
  );
}
