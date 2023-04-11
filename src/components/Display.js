import styles from './Display.module.css';

function Display({ result }) {
  return (
    <div>
      <input className={styles.input} type="text" value={result} />
    </div>
  );
}

export default Display;
