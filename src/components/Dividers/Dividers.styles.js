import styled from "styled-components";

export const HorizontalLine = styled.hr`
  border-top: 0 solid var(--white);
  width: 100%;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid var(--white);
  grid-column: 2 / span 1;
  justify-self: center;
  display: none;

  @media only screen and (min-width: 700px) {
    display: block;
    grid-column: 2 / 3;
  }
`;
