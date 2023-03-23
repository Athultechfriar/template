import {Select} from "antd";
import FloatLabel from "../FloatLabel/FloatLabel";
import "./CustomSelectPerson.css";
export default function CustomSelectPerson({parentClass, label, name, value, id, handleChange, children, dataTestID, mode}) {
  return (
    <>
      <FloatLabel parentClass={parentClass} label={label} name={name} value={value}>
        <Select
          mode={mode}
          data-test-id={dataTestID}
          id={id}
          showArrow
          showSearch
          suffixIcon={
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M13 1L7 7L1 1" stroke="#1B1717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          allowClear={true}
          onChange={handleChange}
          width={100}
          value={value}
          className="customSelect"
          popupClassName="customSelectMenu"
          optionLabelProp="label"
          // maxTagCount={"responsive"}
          removeIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M7 1L1 7" stroke="#1B1717" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 1L7 7" stroke="#1B1717" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        >
          {children}
        </Select>
      </FloatLabel>
    </>
  );
}
