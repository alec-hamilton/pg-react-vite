import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
  font-size: 0;
`;

export const EpisodeTextBox = styled.div`
  padding: 0 0.625rem;
  background-color: var(--overlay);
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: hidden;

  @media only screen and (min-width: 500px) {
    padding: 0 1.25rem;
  }

  @media only screen and (min-width: 700px) {
    padding: 0 1.5rem;
  }

  @media only screen and (min-width: 952px) {
    padding: 0 1.875rem;
  }
`;

export const EpisodeTextBoxAnchor = styled.a.attrs((props) => ({
  rel: "noreferrer",
}))`
  text-decoration: none;
`;
