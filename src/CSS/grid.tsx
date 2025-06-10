import styles from "./grid.module.scss"

function GridExamples() {
  let nums = Array.from({ length: 9 }, (__, i) => i + 1);
  let numStrings = Array.from({ length: 9 }, (__, i) => `Number ${i + 1}`);

  return <>
    <h3>Grid Examples</h3>
    <br />
    <div className={styles.container}>
      {nums.map(num => {
        return <div className={styles.children}>Box {num}</div>
      })}
    </div>
    <br />
    <br />
    <div className={styles.container}>
      {numStrings.map(str => {
        return <div className={styles.children}>Box {str}</div>
      })}
    </div>
  </>;
}

export default GridExamples;