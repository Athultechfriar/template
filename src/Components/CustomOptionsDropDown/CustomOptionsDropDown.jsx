import {Button, Dropdown, Menu, Space} from "antd";
import Icons from "../Icons/Icons";
import "./CustomOptionsDropDown.css";

export default function CustomOptionsDropDown({dropdownMenu, placement}) {
  return (
    <>
      <Dropdown trigger={"click"} overlayClassName="CustomDropDown" overlay={dropdownMenu} placement={placement}>
        <div className="Icon">{Icons.Options}</div>
      </Dropdown>
    </>
  );
}
