import React from "react";
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";

const CustomCheckbox = ({ handleChange, label, name, className, bgColor, checkColor, labelStyle, checked }) => {
  return (
    <>
      <Checkbox
      checked={checked}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor:bgColor?? "#F9CB40",
              alignSelf: "stretch",
            }}
          >
            <FiCheck color={`${checkColor ?? "white"}`} size={12} />
          </div>
        }
        name={name}
        className={className}
        onChange={handleChange}
        borderColor="#BEBEBE"
        borderWidth={1}
        borderRadius={2}
        style={{ overflow: "hidden" }}
        size={15}
        label={label}
        labelStyle={labelStyle}
      />
    </>
  );
};

export default CustomCheckbox;
