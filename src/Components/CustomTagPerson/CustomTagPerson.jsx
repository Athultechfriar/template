import {Space} from "antd";
import React from "react";
import "./CustomTagPerson.css";

export default function CustomTagPerson({img, name}) {
  return (
    <>
      <Space size={6}>
        <img src={img} alt={name} className="img" width="19px" height="19px" />
        <span>{name}</span>
      </Space>
    </>
  );
}
