import { useEffect } from "react";
import styles from "./dropdown.module.scss"

function VanillaDropDown() {

  useEffect(() => {
    const dropDownContainer = document.querySelector("#dropdown-container")
    const dropdownParent = document.querySelector("#dropdown-parent");

    function handleClick(event) {
      event.stopPropagation();
      const nextElement = dropdownParent.nextElementSibling;

      if (nextElement) {
        dropDownContainer.removeChild(nextElement);
        document.getElementById("dropdown-parent-text").innerText = "Open Component"
      } else {
        const childComponent = document.createElement('div');
        childComponent.classList.add(styles.dropdownChildren);
        childComponent.innerText = "Component is now open!!"
        dropDownContainer.appendChild(childComponent);
        document.getElementById("dropdown-parent-text").innerText = "Close Component"
      }
    }
    dropdownParent.addEventListener("click", handleClick)

    //cleanup
    return () => dropdownParent.removeEventListener("click", handleClick);

  }, [])
  return <><h4>Vanilla JS Dropdown</h4>
    <div id="dropdown-container">
      <div id="dropdown-parent" className={styles.dropdownParent}><span id="dropdown-parent-text">Open Component</span></div>
    </div>
    <></></>
};

export default VanillaDropDown;