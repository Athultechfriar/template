import { Button } from "antd";
import "./CustomButton.css"

export default function CustomButton({ type, size, className, handleClick, icon, text, disabled, iconPosition}) {
  return (
    <>
      <Button disabled={disabled} className={['customBtn', className, icon?"btn-icon":"", iconPosition === "right" ? 'iconRight' : "" ]} type={type} size={size} onClick={handleClick} icon={icon} >{text}</Button>
    </>
  )
}