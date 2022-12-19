import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2da1a1;
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
    background-color: #fff;
    color: #000;
    border: 1px solid #555;
    height: 1.5rem;
    font-size: 1.2rem;
  }

  & select {
    width: 100%;
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
`;
