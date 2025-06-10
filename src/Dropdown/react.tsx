import { useState } from "react";
import styles from "./dropdown.module.scss"

function ReactDropDown() {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }
  return <><h4>React Dropdown</h4>
    <div onClick={handleClick} className={styles.dropdownParent}>{open ? "Close " : "Open "}Component</div>
    {open && <div className={styles.dropdownChildren}>Component is now open!!</div>}

  </>
};

export default ReactDropDown;