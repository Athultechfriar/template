import { Select } from "antd";
import FloatLabel from "../FloatLabel/FloatLabel";
import "./CustomSelectMultiNoRemove.css";
export default function CustomSelectMultiNoRemove({ parentClass, label, name, value, id, handleChange, options, disabled }) {
  return (
    <>
      <FloatLabel parentClass={parentClass} label={label} name={name} value={value}>
        <Select
          mode="multiple"
          showArrow
          showSearch
          suffixIcon={<svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 1L7 7L1 1" stroke="#1B1717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          allowClear={true}
          onChange={handleChange}
          options={options}
          width={100}
          value={value}
          className="customSelect"
          id="customSelect"
          popupClassName="customSelectMenu"
          disabled={disabled}
        />
      </FloatLabel>
    </>
  );
}
