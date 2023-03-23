import { Card } from "antd";
import React from "react";
import Icons from "../Icons/Icons"
import "./CustomCard.css";

const CustomCard = ({ label, amount }) => {
  return (
    <>
      <Card
        style={{
          width: "100%",
        }}
        className="card"
      >
        <div className="card-body">
          <div className="bucket-icon">{Icons.bucket}</div>
          <div className="content"> 
            <p className="pp">{label}</p>
            <p className="amt">{amount}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CustomCard;
