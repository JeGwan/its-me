import { classNames } from "@lib/utils";
import styleVariables from "@styles/variables";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const ButtonComp = styled.button`
  height: ${styleVariables.ui.defaultHeight}px;
  padding: 0 ${styleVariables.ui.defaultPadding}px;
  line-height: ${styleVariables.ui.defaultHeight}px;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${styleVariables.colors.grey1};
  background-color: ${styleVariables.colors.grey7};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    background-color: ${styleVariables.colors.grey6};
  }
  &:active {
    background-color: ${styleVariables.colors.grey5};
  }
  &.primary {
    background-color: ${styleVariables.colors.primary};
    color: white;
    &:hover {
      background-color: ${styleVariables.colors.dark};
    }
    &:active {
      background-color: ${styleVariables.colors.darker};
    }
  }
`;

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: "primary" | "default";
  htmlType?: "button" | "submit" | "reset";
};
const Button = ({ type, className, htmlType, ...props }: ButtonProps) => {
  return (
    <ButtonComp
      type={htmlType}
      className={classNames([className, type])}
      {...props}
    />
  );
};

export default Button;
