import { HTMLAttributes } from "react";
import styled, { createGlobalStyle } from "styled-components";

const TitleComp = styled.h1`
  &:first-child {
    margin-top: 0;
  }
  font-weight: bold;
  margin: 2em 0 1em;
  &.lv-1 {
    font-size: 2.4rem;
  }
  &.lv-2 {
    font-size: 2.2rem;
  }
  &.lv-3 {
    font-size: 1.8rem;
    margin: 1em 0;
  }
  &.lv-4 {
    font-size: 1.6rem;
    margin: 1em 0;
  }
  &.lv-5 {
    font-size: 1.4rem;
    margin: 1em 0;
  }
`;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}
const Title = ({ level = 3, ...props }: TitleProps) => {
  return <TitleComp className={`lv-${level}`} {...props} />;
};
export default Title;
