import ChoiceButton from "./ChoiceButton";

export default function GameBoard({ onChoice, playerChoice, computerChoice }) {
  return (
    <>
      {!playerChoice ? (
        <div className="choice__container">
          <ChoiceButton onChoice={onChoice}>👊</ChoiceButton>
          <ChoiceButton onChoice={onChoice}>🖐️</ChoiceButton>
          <ChoiceButton onChoice={onChoice}>✌️</ChoiceButton>
        </div>
      ) : (
        <div className="choice__container">
          <div className="choice">
            <p>
              You picked
              {playerChoice === "👊" && " rock."}
              {playerChoice === "🖐️" && " paper."}
              {playerChoice === "✌️" && " scissors."}
            </p>
            <p className="choice__icon">{playerChoice}</p>
          </div>
          <div className="choice">
            <div>
              <p>
                I picked
                {computerChoice === "👊" && " rock."}
                {computerChoice === "🖐️" && " paper."}
                {computerChoice === "✌️" && " scissors."}
              </p>
              <p className="choice__icon">{computerChoice}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
