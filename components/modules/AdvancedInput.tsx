import Input from "@components/atoms/Input";
import styleVariables from "@styles/variables";
import React, { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

const AdvancedInputComp = styled.div`
  position: relative;
  height: 6rem;
  display: flex;
  flex-direction: column;
  & > span {
    position: absolute;
    line-height: 1.4rem;
    font-size: 1.4rem;
    bottom: 1.3rem;
    left: 1.3rem;
    color: #999;
    transition: all 0.3s;
    &.focus {
      font-size: 1.2rem;
      bottom: 4.2rem;
      left: 0.2rem;
      &:not(.value) {
        color: ${styleVariables.colors.primary};
      }
    }
  }
  & > input {
    margin-top: auto;
    height: ${styleVariables.ui.defaultHeight}px;
    line-height: ${styleVariables.ui.defaultHeight}px;
    font-size: 1.4rem;
    border-radius: 0.4rem;
    padding: 0 ${styleVariables.ui.defaultPadding}px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: white;
    border: 1px solid #ddd;
    &.full {
      display: block;
      width: 100%;
    }
    &:hover {
      border-color: ${styleVariables.colors.primary};
    }
    &:focus {
      border-color: ${styleVariables.colors.primary};
      box-shadow: 0 0 0 2px rgb(222 0 9 / 20%);
    }
    &::placeholder {
      color: #999;
    }
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const AdvancedInput = ({
  label,
  value,
  className,
  onChange,
  ...props
}: Props) => {
  const classArray: string[] = [];
  const [focus, setFocus] = useState(false);
  const [innerValue, setInnerValue] = useState(value);
  if (className) classArray.push(className);
  if (focus) classArray.push("focus");
  if (innerValue) classArray.push("value");
  className = classArray.join(" ");

  return (
    <AdvancedInputComp>
      <span className={className}>{label}</span>
      <Input
        onChange={(e) => {
          setInnerValue(e.target.value);
          if (onChange) onChange(e);
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (!innerValue) setFocus(false);
        }}
        {...props}
      />
    </AdvancedInputComp>
  );
};

export default AdvancedInput;
