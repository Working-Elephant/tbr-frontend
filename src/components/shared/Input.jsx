/* eslint-disable react/prop-types */
import React, { forwardRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../shared/input.css";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
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
    label,
    ...props
  },
  ref
) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const tooglePassword = () => {
    return passwordShown ? "text" : "password";
  };
  return (
    <React.Fragment>
      <span className="relative">
        <input
          className={`${
            border ? border : "border border-borderGrey"
          } w-full py-2 px-3 ${
            fontSize ? fontSize : "text-sm"
          } focus:outline-none  placeholder:text-sm placeholder:${
            placeholderColor ? placeholderColor : "text-dark"
          }  ${paddingY ? paddingY : "py-2"} ${paddingX ? paddingX : "px-3"}`}
          type={type == "password" ? tooglePassword() : "text"}
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
        {type == "password" ? (
          <i className="password" onClick={togglePasswordVisiblity}>
            {passwordShown ? eye : eyeSlash}
          </i>
        ) : null}
      </span>
    </React.Fragment>
  );
});
export default Input;
