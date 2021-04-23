import { HTMLAttributes } from "react";
import styled, { createGlobalStyle } from "styled-components";

const TitleComp = styled.h1`
  &:first-child {
    margin-top: 0;
  }
  font-weight: bold;
  margin: 3rem 0 2rem;
  &.lv-1 {
    font-size: 2.4rem;
  }
  &.lv-2 {
    font-size: 2.2rem;
  }
  &.lv-3 {
    font-size: 2rem;
  }
  &.lv-4 {
    font-size: 1.8rem;
  }
  &.lv-4 {
    font-size: 1.6rem;
  }
`;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}
const Title = ({ level = 3, ...props }: TitleProps) => {
  return <TitleComp className={`lv-${level}`} {...props} />;
};
export default Title;
