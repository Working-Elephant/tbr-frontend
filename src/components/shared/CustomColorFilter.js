import React from 'react'
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";

const CustomColorFilter = ({ name, className, color }) => {
  return (
    <>
      <Checkbox
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: color,
              alignSelf: "stretch",
            }}
          >
            <FiCheck color="white" size={18} />
          </div>
        }
        name={name}
        className={className}
        borderColor="#FFFFFF"
        borderWidth={1}
        borderRadius={2}
        style={{ overflow: "hidden", backgroundColor: color }}
        size={20}
      />
    </>
  )
}

export default CustomColorFilter