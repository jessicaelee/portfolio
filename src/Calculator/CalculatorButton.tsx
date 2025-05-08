type CalculatorButtonProps = {
  classes: string;
  buttonText: string;
  handleClick: any
}

function CalculatorButton({ classes, buttonText, handleClick }: CalculatorButtonProps) {
  return (<div className={classes} onClick={() => handleClick(buttonText)}>{buttonText}</div>)
};

export default CalculatorButton;