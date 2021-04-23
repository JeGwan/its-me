import styleVariables from "@styles/variables";
import { SelectHTMLAttributes, useState } from "react";
import styled from "styled-components";

const SelectComp = styled.select`
  height: ${styleVariables.ui.defaultHeight}px;
  line-height: ${styleVariables.ui.defaultHeight - 2}px;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  padding: 0 ${styleVariables.ui.defaultPadding + 16}px 0
    ${styleVariables.ui.defaultPadding}px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${styleVariables.colors.grey6};
  appearance: none;
  background-color: white;
  background-image: url("/assets/arrow.svg");
  background-size: 0.8rem;
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    border-color: ${styleVariables.colors.primary};
  }
  &:focus {
    border-color: ${styleVariables.colors.primary};
    box-shadow: 0 0 0 2px ${styleVariables.colors.primaryAlpha};
  }
  &.placeholder {
    color: ${styleVariables.colors.grey6};
  }
`;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}
const Select = ({
  placeholder,
  className,
  children,
  value,
  onChange,
  ...props
}: SelectProps) => {
  const [innerValue, setInnerValue] = useState(value);
  if (placeholder !== undefined && innerValue === undefined) {
    className = (className ? className + " " : "") + "placeholder";
  }
  return (
    <SelectComp
      className={className}
      onChange={(e) => {
        setInnerValue(e.target.value);
        if (onChange) onChange(e);
      }}
      value={innerValue}
      {...props}
    >
      {placeholder && <option hidden>{placeholder}</option>}
      {children}
    </SelectComp>
  );
};

export default Select;
