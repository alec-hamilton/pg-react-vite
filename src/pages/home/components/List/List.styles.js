import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 1rem 1rem 0;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 8fr 1fr 8fr;
    padding: 1rem;
  }
`;

export const ListEpisodeNumber = styled.td`
  width: 2rem;
  text-align: end;
`;

export const ListLeft = styled.table`
  list-style: none;
  padding-left: 0;
  color: var(--white);
  font-weight: 500;
  margin: 0;

  @media only screen and (min-width: 700px) {
    grid-column: 1 / 2;
    ${ListEpisodeNumber} {
      width: 1rem;
    }
  }
`;

export const ListRight = styled.table`
  list-style: none;
  padding-left: 0;
  color: var(--white);
  font-weight: 500;
  margin: 0;

  @media only screen and (min-width: 700px) {
    grid-column: 3 / 4;
    ${ListEpisodeNumber} {
      text-align: end;
    }
  }
`;

export const ListTableData = styled.td`
  padding: 0;
`;
