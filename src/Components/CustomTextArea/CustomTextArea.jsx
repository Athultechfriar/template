import { Input } from "antd";
import React from "react";
import FloatLabel from "../FloatLabel/FloatLabel";
import "./CustomTextArea.css";
const { TextArea } = Input;

export default function CustomTextArea({
  parentClass,
  label,
  name,
  value,
  rows,
  handleChange,
  id,
  dataTestId
}) {
  return (
    <>
      <FloatLabel
        parentClass={parentClass}
        label={label}
        name={name}
        value={value}
      >
        <TextArea
          data-test-id={dataTestId}
          id={id}
          rows={rows}
          className="customTextArea"
          autoSize={false}
          value={value}
          onChange={handleChange}          
        />
      </FloatLabel>
    </>
  );
}
