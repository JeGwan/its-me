import stc from "@styles/constants";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputComp = styled.input`
  height: ${stc.ui.defaultHeight}px;
  line-height: ${stc.ui.defaultHeight}px;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  padding: 0 ${stc.ui.defaultPadding}px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: white;
  border: 1px solid ${stc.colors.grey6};
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    border: 1px solid ${stc.colors.primary};
  }
  &:focus {
    border: 1px solid ${stc.colors.primary};
    box-shadow: 0 0 0 2px ${stc.colors.primaryAlpha};
  }
  &:disabled {
    &:hover {
      border: 1px solid #ddd;
    }
    &:focus {
      border: 1px solid #ddd;
      box-shadow: 0 0 0 2px ${stc.colors.primaryAlpha};
    }
    background-color: #eee;
  }
  &::placeholder {
    color: ${stc.colors.grey6};
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
}
const Input = ({ loading, ...props }: Props) => {
  return <InputComp {...props} />;
};
export default Input;
