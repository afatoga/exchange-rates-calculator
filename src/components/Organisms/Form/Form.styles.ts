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
  }

  & input {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    color: #000;
    border: 1px solid #555;
    height: 1.5rem;
    font-size: 1.2rem;
  }

  & select {
    width: 100%;
    max-width: 320px;
    padding: 0;
    margin: 0;
    background-color: #fff;
    color: #000;
    height: 1.5rem;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  height: 2rem;
  width: 10rem;
  font-size: 1.2rem;
  &:hover {
    background-color: #070c62;
    border: 0;
    border-radius: 3px;
  }
`;

export const ResultMessage = styled.p`
  font-size: 1.2rem;
  padding: 2rem;
  border: 1px dashed;
  max-width: 320px;
  margin: 2rem auto 0;
`;

export const ConversionResult = styled.span`
  color: #070c62;
  font-weight: 700;
`;
