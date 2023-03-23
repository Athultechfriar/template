import { Tag } from "antd";
import React from "react";
import "./CustomTag.css";

export default function CustomTag({ bgColor, borderColor, textColor, className, children }) {
  return (
    <Tag
      {...(bgColor && borderColor && textColor
        ? {
            style: {
              backgroundColor: bgColor,
              borderColor: borderColor,
              color: textColor,
            },
          }
        : {})}
      className={className ? 'CustomTag className' : 'CustomTag'}
    >
      {children}
    </Tag>
  );
}
