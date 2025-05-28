import styled from "styled-components";

export const RadioContainer = styled.div`
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

export const RadioShowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 952px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const RadioShowCard = styled.div`
  border: 1px solid #333;
  padding: 1.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #555;
    transform: translateY(-2px);
  }

  h3 {
    font-weight: 500;
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .date {
    font-weight: 300;
    margin: 0 0 0.25rem 0;
    color: #888;
    font-size: 0.9rem;
  }

  .duration {
    font-weight: 300;
    margin: 0 0 1rem 0;
    color: #888;
    font-size: 0.9rem;
  }

  .description {
    font-weight: 400;
    margin: 0 0 1rem 0;
    line-height: 1.4;
    font-size: 0.95rem;
  }

  .placeholder-link {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    color: inherit;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;