import {Dropdown} from "antd";
import "./CustomDropDown.css";

export default function CustomDropDown({dropdownMenu, element, placement, className, open, onOpenChange}) {
  return (
    <>
      <Dropdown open={open} trigger={"click"} className={className} overlayClassName="CustomDropDown" overlay={dropdownMenu} placement={placement} onOpenChange={onOpenChange}>
        <div className="d-inline-flex">{element}</div>
      </Dropdown>
    </>
  );
}
