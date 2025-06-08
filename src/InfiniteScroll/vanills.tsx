import { useEffect, useRef, useState } from "react";
import styles from "./Items.module.scss"

function VanillaInfiniteScroll() {


  return <>
    <>Example of infinite scroll using vanilla JavaScript.</>
    {/* {items.map((____, idx) => {
      return <div key={idx} className={styles.items}>Item #{idx + 1}</div>
    })}
    <div className={styles.loadMore} ref={loader}>{hasMore ? "Loading..." : "No more data"}</div> */}
  </>
}

export default VanillaInfiniteScroll;