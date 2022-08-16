import React from "react";
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";

const CustomCheckbox = ({ handleChange, label, name, className }) => {
  return (
    <>
      <Checkbox
        // checked={true}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#F9CB40",
              alignSelf: "stretch",
            }}
          >
            <FiCheck color="white" size={12} />
          </div>
        }
        name={name}
        className={className}
        // onChange={handleChange}
        borderColor="#BEBEBE"
        borderWidth={1}
        borderRadius={2}
        style={{ overflow: "hidden" }}
        size={15}
        label={label}
      />
    </>
  );
};

export default CustomCheckbox;
