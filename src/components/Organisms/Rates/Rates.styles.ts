import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Table = styled.table`
  // margin: 2rem auto;
  border-collapse: collapse;
  font-size: 1.2rem;
  border: 1px solid #070c62;
`;

export const TableLine = styled.tr`
  &:nth-child(even) {
    background: #bebebe;
  }
  &:hover {
    background-color: palevioletred;
    color: #070c62;
  }
`;

export const HeadingCell = styled.th.attrs((props) => ({
  align: props.align || "left",
}))`
  min-width: 8rem;
  text-align: ${(props) => props.align};
  padding: 0 1rem;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: #aaa;
`;

export const Cell = styled.td`
  text-align: left;
  padding: 0.5rem 1rem;
  border-right: 1px solid #aaa;
`;

export const RateCell = styled.td`
  text-align: right;
  padding: 0.5rem 1rem;
  &:hover {
    font-weight: 700;
  }
`;
