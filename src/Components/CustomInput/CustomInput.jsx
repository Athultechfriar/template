import FloatLabel from "../FloatLabel/FloatLabel";
import { Input } from "antd";
import "./CustomInput.css";

export default function CustomInput({ parentClass, label, name, value, dataTestId, id, handleChange }) {
  return (
    <>
      <FloatLabel parentClass={parentClass} label={label} name={name} value={value}>
        <Input data-test-id={dataTestId} id={id} className="customInput" value={value} onChange={handleChange} />
      </FloatLabel>
    </>
  );
}
