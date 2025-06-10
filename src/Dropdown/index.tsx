import Page from "../Common/Page";
import ReactDropDown from "./react";
import VanillaDropDown from "./vanilla";
import styles from "./dropdown.module.scss";

const Dropdown = () => {
  const title = "Dropdown"
  const description = "Dropdown with react and also vanilla JS"
  return <Page title={title} description={description}>
    <div className={styles.dropdownContainer}>
      <ReactDropDown />
    </div>
    <div className={styles.dropdownContainer}>
      <VanillaDropDown />
    </div>
  </Page>
}

export default Dropdown;