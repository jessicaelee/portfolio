import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import classNames from "classnames";
import styles from "./css.module.scss"

function FlexBoxExamples() {
  const [justifyContent, setJustifyContent] = useState("flexStart")
  const [flexDirection, setFlexDirection] = useState("row")
  const [alignItems, setAlignItems] = useState("flexStartAlign")

  function handleClick(type: string, stateUpdate: any) {
    stateUpdate(type)
  }

  const userReadableJustifyContent = {
    flexStart: "flex-start",
    flexEnd: "flex-end",
    spaceBetween: "space-between",
    spaceAround: "space-around",
    spaceEvenly: "space-evenly",
  }

  const userReadableFlexDirection = {
    row: "row",
    rowReverse: "row-reverse",
    column: "column",
    columnReverse: "column-reverse",
  }

  const userReadablealignItems = {
    flexStartAlign: "flex-start",
    flexEndAlign: "flex-end",
    centerAlign: "center",
    baselineAlign: "baseline",
    stretchAlign: "stretch",
  }
  return <>
    <h3>Flexbox examples</h3>
    <h5 className={styles.h5}>Parent css styles</h5>
    <div className={styles.title}>display: flex;</div>
    <div className={styles.title}>width: 100%;</div>
    <div className={styles.title}>min-height: 200px;</div>

    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
        justify-content: {userReadableJustifyContent[justifyContent]}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="secondary" >

        <Dropdown.Item onClick={() => handleClick("flexStart", setJustifyContent)}>flex-start</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("flexEnd", setJustifyContent)}>flex-end</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("spaceBetween", setJustifyContent)}>space-between</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("spaceAround", setJustifyContent)}>space-around</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("spaceEvenly", setJustifyContent)}>space-evenly</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    <div></div>
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
        flex-direction: {userReadableFlexDirection[flexDirection]}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="secondary" >
        <Dropdown.Item onClick={() => handleClick("row", setFlexDirection)}>row</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("rowReverse", setFlexDirection)}>row-reverse</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("column", setFlexDirection)}>column</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("columnReverse", setFlexDirection)}>column-reverse</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
        align-items: {userReadablealignItems[alignItems]}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="secondary" >
        <Dropdown.Item onClick={() => handleClick("flexStartAlign", setAlignItems)}>flex-start</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("flexEndAlign", setAlignItems)}>flex-end</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("centerAlign", setAlignItems)}>center</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("baselineAlign", setAlignItems)}>baseline</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("stretchAlign", setAlignItems)}>stretch</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <h5 className={styles.h5}>Children css styles</h5>
    <div className={styles.title}>height: 30px;</div>
    <div className={styles.title}>line-height: 30px;</div>
    <div className={styles.title}>text-align: center;</div>
    <div className={styles.title}>vertical-align: middle;</div>
    <div className={styles.title}><i>Other potential styles to be applied to individual child: flex-grow, flex-shrink, flex-basis, flex, align-self</i></div>


    <div className={classNames(styles.parent, styles[justifyContent], styles[flexDirection], styles[alignItems])}>
      <div className={classNames(styles.div)}>Div 1</div>
      <div className={classNames(styles.div)}>Div 2</div>
      <div className={classNames(styles.div)}>Div 3</div>
    </div>
  </>
};

export default FlexBoxExamples;