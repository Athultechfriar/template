import { message, Upload } from "antd";
import React, { useState } from "react";
import "./UploadImage.css";

export default function UploadImage({ uploadIcon,ImgUploadText,handleChange,name,id, value }) {
  return (
    <>
      <div className="d-inline-flex align-items-center">
        <div className="me-3">
          {value !== "" ? (
            <div className={`UploadIndicator ImgSpacing`}>
              <img src={value} width={70} height={70} objectFit="cover" />
            </div>
          ) : (
            <div className={`UploadIndicator  IconSpacing`}>
              {uploadIcon}
            </div>
          )}
        </div>
        <div className="ImgUploaderWrapper">
          <input
            type="file"
            className="ImgUploader"
            onChange={handleChange}
            name={name}
            id={id}
          />
          <label htmlFor={id}>{ImgUploadText}</label>
        </div>
      </div>
    </>
  );
}
