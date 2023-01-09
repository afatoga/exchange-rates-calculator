import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2da1a1;
  margin-bottom: 3rem;
`;

export const FormGroup = styled.div`
  display: block;
  margin: 0 auto 1rem;

  & label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  & input {
    padding: 0.5em;
    margin: 0;
    width: 90%;
    max-width: 300px;
    background-color: #fff;
    color: #000;
    border: 1px solid #555;
    height: 1.5rem;
    font-size: 1.2rem;
    border-radius: 1em;
  }

  & select {
    width: 100%;
    max-width: 320px;
    margin: 0;
    background-color: #fff;
    color: #000;
    height: 3rem;
    font-size: 1rem;
    border-radius: 1.2em;
    padding-left: 0.6em;
    padding-right: 2rem !important;
    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
      no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    appearance: none !important;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 8rem;
  font-size: 1.2rem;
  border-radius: 0.8em;
  padding: 0.4rem;
  cursor: pointer;
  border: 2px solid #090d62;
  font-weight: 700;
  background-color: #000;

  &:hover {
    background-color: #2da1a1;
    transition: all ease 0.4s;
    color: #000;
    border-width: 2px;
    padding: 0.4rem;
  }
`;

export const ResultMessage = styled.p`
  font-size: 1.2rem;
  padding: 2rem;
  border: 1px dashed;
  max-width: 254px;
  margin: 2rem auto 0;
  border-radius: 1em;
  background-color: #8ce6e6;
  transition: all ease 0.5s;

  &:hover {
    background-color: #e7a9ff;
  }
`;

export const ConversionResult = styled.span`
  color: #070c62;
  font-weight: 700;
`;
