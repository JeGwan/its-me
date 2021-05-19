import { classNames } from "@lib/utils";
import stc from "@styles/constants";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const ButtonComp = styled.button`
  height: ${stc.ui.defaultHeight}px;
  padding: 0 ${stc.ui.defaultPadding}px;
  line-height: ${stc.ui.defaultHeight}px;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${stc.colors.grey1};
  background-color: ${stc.colors.grey7};
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
    background-color: ${stc.colors.grey6};
  }
  &:active {
    background-color: ${stc.colors.grey5};
  }
  &.primary {
    background-color: ${stc.colors.primary};
    color: white;
    &:hover {
      background-color: ${stc.colors.dark};
    }
    &:active {
      background-color: ${stc.colors.darker};
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
