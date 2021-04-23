import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const DataDescComp = styled.dl`
  display: flex;
  align-items: flex-start;
  margin: 1.2rem 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  & > dt {
    font-size: 1.2rem;
    margin-right: auto;
    color: #777;
    line-height: 1.8rem;
  }
  & > dd {
    font-weight: bold;
    line-height: 1.3;
    & > div {
      margin-bottom: 0.4rem;
    }
  }
`;
interface Props extends HTMLAttributes<HTMLDListElement> {
  title?: string;
  desc?: string | number | string[] | number[];
}
const DataDesc = ({ title, desc, ...props }: Props) => {
  return (
    <DataDescComp {...props}>
      <dt>{title}</dt>
      <dd>
        {Array.isArray(desc)
          ? (desc as string[]).map((value, index) => (
              <div key={index}>{value}</div>
            ))
          : desc}
      </dd>
    </DataDescComp>
  );
};

export default DataDesc;
