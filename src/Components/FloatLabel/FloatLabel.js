import { useState } from "react";
import styles from "./FloatLabel.module.css";

export default function FloatLabel({ children, label, value, parentClass }) {
  const [focus, setFocus] = useState(false);

  const labelClass =
    focus || (value && value.length !== 0)
      ? `${styles.label} ${styles.labelFloat}`
      : styles.label;

  return (
    <>
      <div
        className={`${styles.floatLabel} ${parentClass === "small" ? styles.small : parentClass}`}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        {children}
        <label className={labelClass}>{label}</label>
      </div>
    </>
  );
}
