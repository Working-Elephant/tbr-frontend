/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

const SelectInput = forwardRef(function SelectInput(
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
    defaultOption,
    options,
    border,
    paddingX,
    paddingY,
    ...props
  },
  ref
) {
  return (
    <React.Fragment>
      <select
        className={`${
          border ? border : "border border-borderGrey"
        } w-full py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark  ${
          paddingY ? paddingY : "py-2"
        } ${paddingX ? paddingX : "px-3"}`}
        // type={type}
        // placeholder={placeholder}
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
      >
        <option value="">{defaultOption}</option>
        {options.map((option, i) => (
          <option key={i} value={option.id ? option.id : option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
});

export default SelectInput;
