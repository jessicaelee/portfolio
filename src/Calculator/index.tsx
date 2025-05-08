import { useState } from "react";
import classNames from "classnames";
import Page from "../Common/Page";
import styles from "./Calculator.module.scss"
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  const title = "Calculator"
  const description = <>A calculator with basic math functionality in React. Based off of <a href="https://calculator-1.com/simple/" target="_blank">this site</a>.</>
  const buttonRows = [[
    { buttonText: "7", classes: classNames(styles.button, styles.number) },
    { buttonText: "4", classes: classNames(styles.button, styles.number) },
    { buttonText: "1", classes: classNames(styles.button, styles.number) },
    { buttonText: "C", classes: classNames(styles.button, styles.red) },

  ], [
    { buttonText: "8", classes: classNames(styles.button, styles.number) },
    { buttonText: "5", classes: classNames(styles.button, styles.number) },
    { buttonText: "2", classes: classNames(styles.button, styles.number) },
    { buttonText: "0", classes: classNames(styles.button, styles.number) }

  ], [
    { buttonText: "9", classes: classNames(styles.button, styles.number) },
    { buttonText: "6", classes: classNames(styles.button, styles.number) },
    { buttonText: "3", classes: classNames(styles.button, styles.number) },
    { buttonText: ".", classes: classNames(styles.button, styles.number) },
  ], [
    { buttonText: "+/-", classes: classNames(styles.button, styles.light) },
    { buttonText: "x", classes: classNames(styles.button, styles.dark) },
    { buttonText: "-", classes: classNames(styles.button, styles.dark) },
    { buttonText: "+", classes: classNames(styles.button, styles.dark) },
  ], [
    { buttonText: "<-", classes: classNames(styles.button, styles.light) },
    { buttonText: "/", classes: classNames(styles.button, styles.dark) },
    { buttonText: "=", classes: classNames(styles.button, styles.blue) },
  ]]
  const [display, setDisplay] = useState<string>("0");
  const [operation, setOperation] = useState<string | null>(null)
  const operations = "+-/x"

  function calculateNumber(num1: any, num2: any, op: any) {
    if (op === "+") {
      return num1 + num2;
    } else if (op === "-") {
      return num1 - num2;
    } else if (op === "/") {
      return num1 / num2;
    } else if (op === "x") {
      return num1 * num2;
    }
  }

  function handleEquals(display: string, operation: string, buttonText?: string) {
    const mathArr = display.split(operation);
    console.log(mathArr, operation)
    if (mathArr.length === 0) {
      //do nothing
    } else if (mathArr.length === 1 || !mathArr[1]) {
      setDisplay(display + mathArr[0])
    } else if (mathArr.length === 2) {
      if (buttonText) {
        setDisplay(`${calculateNumber(+mathArr[0], +mathArr[1], operation)}${buttonText}`);
        setOperation(buttonText);
      } else {
        setDisplay(`${calculateNumber(+mathArr[0], +mathArr[1], operation)}`);
        setOperation(null);
      }
    }
  }

  const handleClick = (buttonText: string) => {
    if (buttonText === "=") {
      if (!operation) return;
      //handle equals
      handleEquals(display, operation)
    } else if (buttonText === "C") {
      // Clear
      setDisplay("0");
      setOperation(null);
    } else if (buttonText === "<-" && display !== "0") {
      // delete one
      const deleted = display[display.length - 1];
      if (operations.includes(deleted)) {
        setOperation(null);
      }
      display.length > 1 ? setDisplay(display.slice(0, -1)) : setDisplay("0")
    } else if (!isNaN(+buttonText) || buttonText === ".") {
      //if it's a number, or a .
      if (display === "0" && buttonText !== ".") {
        //replace the default number;
        setDisplay(buttonText)
      } else {
        setDisplay(display + buttonText)
      }
    } else {
      // either handle adding math operation
      if (operation) {
        const lastChar = display[display.length - 1];
        if (operations.includes(lastChar)) {
          //replace operation
          setDisplay(display.slice(0, -1) + buttonText)
        } else {
          // do math then add operation
          handleEquals(display, operation, buttonText)
        }
      } else {
        setDisplay(display + buttonText)
      }
      setOperation(buttonText)
    }
  }


  return <Page title={title} description={description}>
    <div className={styles.calculator}>
      <div className={styles.screen}><div className={styles.screenDisplay}>{display}</div></div>
      <div className={styles.buttonsContainer}>
        {buttonRows.map(row => {
          return <div className={styles.buttonColumn}>{
            row.map(button => <CalculatorButton classes={button.classes} buttonText={button.buttonText} handleClick={handleClick} />)}</div>
        })}
      </div>
    </div>
  </Page>
};

export default Calculator;