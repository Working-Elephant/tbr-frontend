/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    type,
    placeholder,
    name,
    id,
    disabled,
    value,
    additionalFunc,
    onChange,
    onKeyDown,
    onKeyUp,
    paddingY,
    paddingX,
    border,
    placeholderColor,
    fontSize,
    ...props
  },
  ref
) {
  return (
    <React.Fragment>
      <input
        className={`${
          border ? border : "border border-borderGrey"
        } w-full py-2 px-3 ${
          fontSize ? fontSize : "text-sm"
        } focus:outline-none  placeholder:text-sm placeholder:${
          placeholderColor ? placeholderColor : "text-dark"
        }  ${paddingY ? paddingY : "py-2"} ${paddingX ? paddingX : "px-3"}`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        ref={ref}
        disabled={disabled}
        onChange={(e) => {
          onChange(e);
          additionalFunc && additionalFunc(e);
        }}
        onKeyDown={onKeyDown}
        value={value}
        onKeyUp={onKeyUp}
        {...props}
      />
    </React.Fragment>
  );
});
export default Input;
