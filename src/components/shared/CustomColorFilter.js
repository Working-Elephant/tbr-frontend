import React from 'react'
import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";

const CustomColorFilter = ({ name, className, color }) => {
  console.log(color, name)
  return (
    <>
      <Checkbox
        // checked={true}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: color,
              alignSelf: "stretch",
            }}
          >
            <FiCheck color="blue" size={18} />
          </div>
        }
        name={name}
        className={className}
        // onChange={handleChange}
        borderColor="#BEBEBE"
        borderWidth={1}
        borderRadius={2}
        style={{ overflow: "hidden", backgroundColor: color }}
        size={20}
      //   label={label}
      />
    </>
  )
}

export default CustomColorFilter