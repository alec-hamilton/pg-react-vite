import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1.5rem 1.5rem;

  @media only screen and (min-width: 500px) {
    margin: 2rem 0;
  }

  @media only screen and (min-width: 700px) {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 952px) {
    width: 952px;
  }
`;
