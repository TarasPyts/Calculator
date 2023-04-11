import Button from './Button';

function Keypad({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
}) {
  return (
    <div>
      <div>
        <Button text="1" onClick={() => onNumberClick(1)} />
        <Button text="2" onClick={() => onNumberClick(2)} />
        <Button text="3" onClick={() => onNumberClick(3)} />
        <Button text="+" onClick={() => onOperatorClick('+')} />
      </div>
      <div>
        <Button text="4" onClick={() => onNumberClick(4)} />
        <Button text="5" onClick={() => onNumberClick(5)} />
        <Button text="6" onClick={() => onNumberClick(6)} />
        <Button text="-" onClick={() => onOperatorClick('-')} />
      </div>
      <div>
        <Button text="7" onClick={() => onNumberClick(7)} />
        <Button text="8" onClick={() => onNumberClick(8)} />
        <Button text="9" onClick={() => onNumberClick(9)} />
        <Button text="*" onClick={() => onOperatorClick('*')} />
      </div>
      <div>
        <Button text="0" onClick={() => onNumberClick(0)} />
        <Button text="=" onClick={onEqualsClick} />
        <Button text="/" onClick={() => onOperatorClick('/')} />
        <Button text="C" onClick={onClearClick} />
      </div>
    </div>
  );
}

export default Keypad;
