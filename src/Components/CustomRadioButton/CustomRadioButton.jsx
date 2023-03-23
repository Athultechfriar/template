import "./CustomRadioButton.css";
import {  Radio, Space } from "antd";
export default function CustomRadioButton({ direction, handleChange, value,radioData }) {

  return (
    <>
      <Radio.Group
        onChange={handleChange}
        value={value}
        className="CustomRadioButton"
      >
        <Space direction={direction}>
          {radioData.map((item, i) => (
            <Radio key={i} value={i}>{item.label}</Radio>
          ))}
        </Space>
      </Radio.Group>
    </> 
  );
}
