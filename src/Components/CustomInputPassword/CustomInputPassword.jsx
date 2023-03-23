import FloatLabel from "../FloatLabel/FloatLabel";
import {Input} from "antd";
import "./CustomInputPassword.css"
import Icons from "../Icons/Icons";

export default function CustomInputPassword({parentClass, label, name, value, dataTestId, id, handleChange}) {
  return (
    <>
      <FloatLabel parentClass={`${parentClass}`} label={label} name={name} value={value}>
        <Input.Password
          iconRender={(visible) => (visible ? Icons.Eye : Icons.EyeOff)}
          data-test-id={dataTestId}
          id={id}
          className={['customInput','customInputPassword'].join(" ")}
          value={value}
          onChange={handleChange} />
      </FloatLabel>
    </>
  );
}