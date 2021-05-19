import Button from "@components/atoms/Button";
import React, { HTMLAttributes } from "react";
import RcPagination, { PaginationProps } from "rc-pagination";
import styled from "styled-components";
import stc from "@styles/constants";

const PaginationComp = styled.div`
  & > .rc-pagination {
    display: flex;
    & > li {
      outline: none;
      &.rc-pagination-item,
      &.rc-pagination-next,
      &.rc-pagination-prev {
        display: inline-flex;
        padding: 8px 12px;
        border: 1px solid #eee;
        cursor: pointer;
        background-color: white;
        border-radius: 4px;
        transition: all 0.3s;
        &:hover {
          background-color: #ccc;
        }
      }
      &.rc-pagination-item {
        margin: 0 2px;
      }
      &.rc-pagination-prev {
        margin-right: 8px;
      }
      &.rc-pagination-next {
        margin-left: 8px;
      }
      &.rc-pagination-item-active {
        background-color: ${stc.colors.primary};
        color: white;
      }
      &.rc-pagination-jump-next {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
const Pagination = (props: PaginationProps) => {
  return (
    <PaginationComp>
      <RcPagination
        jumpNextIcon={<div style={{ padding: "0 8px" }}>...</div>}
        prevIcon="이전"
        nextIcon="다음"
        {...props}
      />
    </PaginationComp>
  );
};

export default Pagination;
