import ChoiceButton from "./ChoiceButton";
import GameIcon from "./GameIcon";
import RockIcon from "../images/rock.svg";
import PaperIcon from "../images/paper.svg";
import ScissorsIcon from "../images/scissors.svg";

export default function GameBoard({ onChoice, playerChoice, computerChoice }) {
  return (
    <>
      {!playerChoice ? (
        <div className="choice__container">
          <ChoiceButton onChoice={onChoice} value="rock">
            <GameIcon src={RockIcon} alt="rock" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="paper">
            <GameIcon src={PaperIcon} alt="paper" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="scissors">
            <GameIcon src={ScissorsIcon} alt="scissors" />
          </ChoiceButton>
        </div>
      ) : (
        <div className="choice__container">
          <div className="choice">
            <p>You picked {playerChoice}.</p>
            <div className="choice__icon">
              {playerChoice === "rock" && (
                <GameIcon src={RockIcon} alt="rock" />
              )}
              {playerChoice === "paper" && (
                <GameIcon src={PaperIcon} alt="paper" />
              )}
              {playerChoice === "scissors" && (
                <GameIcon src={ScissorsIcon} alt="scissors" />
              )}
            </div>
          </div>
          <div className="choice">
            <div>
              {computerChoice ? <p>I picked {computerChoice}.</p> : ""}
              <div className="choice__icon">
                {computerChoice === "rock" && (
                  <GameIcon src={RockIcon} alt="rock" />
                )}
                {computerChoice === "paper" && (
                  <GameIcon src={PaperIcon} alt="paper" />
                )}
                {computerChoice === "scissors" && (
                  <GameIcon src={ScissorsIcon} alt="scissors" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
