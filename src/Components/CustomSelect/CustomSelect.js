import { Select } from "antd";
import FloatLabel from "../FloatLabel/FloatLabel";
import styles from "./CustomSelect.module.css";
export default function CustomSelect({ parentClass, label, name, value, id, dataTestID, handleChange, options, size, dropdownRender, mode }) {
  return (
    <>
      <FloatLabel parentClass={[parentClass].join(" ")} label={label} name={name} value={value}>
        <Select
          mode={mode}
          id={id}
          data-test-id={dataTestID}
          showSearch
          suffixIcon={<svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 1L7 7L1 1" stroke="#1B1717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          allowClear={true}
          onChange={handleChange}
          options={options}
          width={100}
          size={size}
          value={value}
          className={styles.customSelect}
          popupClassName={styles.customSelectMenu}
          dropdownRender={dropdownRender}
        />
      </FloatLabel>
    </>
  );
}
