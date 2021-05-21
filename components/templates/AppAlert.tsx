import Button from "@components/atoms/Button";
import { CSSProperties, HTMLAttributes, ReactNode, useState } from "react";
import { render } from "react-dom";
import styled, { keyframes } from "styled-components";
import Mask from "@components/atoms/Mask";

const alertAnimation = keyframes`
  from {
    transform: scale(0.5) translate(0, -100%);
    opacity:0;
  }
  to {
    opacity:1;
    transform: scale(1);
  }
`;

const Wrapper = styled(Mask)`
  & > .alert {
    display: flex;
    flex-direction: column;
    margin: 5rem auto 0;
    border-radius: 1.5rem;
    padding: 2rem 3rem;
    max-height: 80vh;
    overflow-y: auto;
    width: 100%;
    max-width: 500px;
    background-color: white;
    box-sizing: border-box;
    position: relative;
    animation: ${alertAnimation} 0.4s ease-in-out forwards;
    & > .alert-title {
      font-size: 24px;
      font-weight: bold;
    }
    & > .alert-body {
      flex: auto;
      margin: 1rem 0;
    }
    & > .alert-footer {
      margin-left: auto;
    }
  }
`;

export interface FunctionalAlertOption {
  title?: string;
  message?: string;
  onClose?: () => void;
  footer?: ReactNode;
  bodyStyle?: CSSProperties;
  destroyOnClose?: boolean;
}
export interface FunctionalAlertProps
  extends HTMLAttributes<HTMLDivElement>,
    FunctionalAlertOption {
  visible?: boolean;
}

const AlertComponent = ({
  message,
  destroyOnClose = false,
  visible = false,
  onClose = () => {},
  title,
  footer,
  bodyStyle,
  ...props
}: FunctionalAlertProps) => {
  if (!visible && destroyOnClose) return null;
  return (
    <Wrapper onClick={onClose} className={visible ? "visible" : "hidden"}>
      <div className="alert" onClick={(e) => e.stopPropagation()} {...props}>
        <h2 className="alert-title">{title}</h2>
        <div className="alert-body" style={bodyStyle}>
          {message}
        </div>
        <div className="alert-footer">
          {footer || (
            <Button type="primary" onClick={onClose}>
              닫기
            </Button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

class AppAlert {
  static open({ onClose, ...props }: FunctionalAlertOption = {}) {
    const root = document.getElementById("__next") || document.body;
    const div = document.createElement("div");
    root.appendChild(div);
    const handleClose = () => {
      if (onClose) onClose();
      root.removeChild(div);
    };
    render(
      <AlertComponent visible={true} onClose={handleClose} {...props} />,
      div
    );
  }
}

export default AppAlert;
