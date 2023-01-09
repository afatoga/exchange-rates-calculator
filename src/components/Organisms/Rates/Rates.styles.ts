import styled from "styled-components";

type TCellProps = {
  align?: string;
  mobileHidden?: boolean;
  width?: string;
};

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-bottom: 3rem;
`;

export const TableContainer = styled.div`
  border: 1px solid #f9c0d3;
  border-radius: 1em;
  overflow-x: clip;
`;

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 1.2rem;
  border-radius: 1em;
`;

export const TableLine = styled.tr`
  &:nth-child(even) {
    background: #ffdede;
  }
  &:hover {
    background-color: #e7a9ff;
    color: #070c62;
    transition: all ease 0.5s;
  }
`;

export const HeadingCell = styled.th`
  min-width: ${(props: TCellProps) => (props?.width ? "initial" : "8rem")};
  text-align: ${(props: TCellProps) => props.align};
  padding: 0.5rem 1rem;
  background-color: #f9c0d3;
  position: sticky;
  top: 0;

  @media only screen and (max-width: 600px) {
    display: ${(props: TCellProps) => props?.mobileHidden && "none"};
  }
`;

export const Cell = styled.td`
  text-align: ${(props: TCellProps) => props?.align};
  padding: 0.5rem 1rem;
  border-right: 1px solid #aaa;

  @media only screen and (max-width: 600px) {
    display: ${(props: TCellProps) => props?.mobileHidden && "none"};
  }
`;

export const RateCell = styled.td`
  text-align: right;
  padding: 0.5rem 1rem;
`;
