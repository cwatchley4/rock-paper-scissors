import ChoiceButton from "./ChoiceButton";
import RockIcon from "../images/rock.svg";
import PaperIcon from "../images/paper.svg";
import ScissorsIcon from "../images/scissors.svg";

export default function GameBoard({ onChoice, playerChoice, computerChoice }) {
  return (
    <>
      {!playerChoice ? (
        <div className="choice__container">
          <ChoiceButton onChoice={onChoice} value="rock">
            <img src={RockIcon} alt="rock" width="80" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="paper">
            <img src={PaperIcon} alt="paper" width="80" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="scissors">
            <img src={ScissorsIcon} alt="scissors" width="80" />
          </ChoiceButton>
        </div>
      ) : (
        <div className="choice__container">
          <div className="choice">
            <p>You picked {playerChoice}.</p>
            <div className="choice__icon">
              {playerChoice === "rock" && (
                <img src={RockIcon} alt="rock" width="80" />
              )}
              {playerChoice === "paper" && (
                <img src={PaperIcon} alt="paper" width="80" />
              )}
              {playerChoice === "scissors" && (
                <img src={ScissorsIcon} alt="scissors" width="80" />
              )}
            </div>
          </div>
          <div className="choice">
            <div>
              {computerChoice ? <p>I picked {computerChoice}.</p> : ""}
              <div className="choice__icon">
                {computerChoice === "rock" && (
                  <img src={RockIcon} alt="rock" width="80" />
                )}
                {computerChoice === "paper" && (
                  <img src={PaperIcon} alt="paper" width="80" />
                )}
                {computerChoice === "scissors" && (
                  <img src={ScissorsIcon} alt="scissors" width="80" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
