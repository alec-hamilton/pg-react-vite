import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 500px) {
    padding-left: 0.5rem;
    gap: 0.5rem;
  }
`;

export const LogoImage = styled.img`
  align-items: center;
  padding: 3px;
  aspect-ratio: 1;
  height: 75px;
  width: 75px;

  @media only screen and (min-width: 500px) {
    height: 94px;
    width: 94px;
  }
`;

export const LogoText = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
  margin: 0.5rem 0;
`;
