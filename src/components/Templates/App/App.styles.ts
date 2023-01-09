import styled from "styled-components";

type AppSectionStylingProperties = {
  flexGrow?: number;
  paddingLeft?: string;
  mobileOrder?: number;
};

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AppSection = styled.section.attrs(
  (props: AppSectionStylingProperties) => ({
    paddingLeft: props.paddingLeft || "0",
    flexGrow: props.flexGrow || "inital",
  })
)`
  margin: 0 auto;
  padding-top: 2rem;
  padding-left: ${(props) => props.paddingLeft};
  width: auto;
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.flexGrow};

  @media (max-width: 996px) {
    padding-top: 2rem;
    flex-direction: column;
    padding-left: 0;
    width: 100%;
    order: ${(props) => props?.mobileOrder};
  }
`;
