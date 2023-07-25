import styled from "styled-components";
import { BiMenu, BiX } from "react-icons/bi";

export const Hamburger = styled(BiMenu).attrs((props) => ({
  size: "2rem",
}))`
  cursor: pointer;
  color: var(--white);
  transition: 0.3s;

  @media only screen and (min-width: 700px) {
    &:hover {
      color: var(--pink);
    }
  }
`;

export const Close = styled(BiX).attrs((props) => ({
  size: "2rem",
}))`
  position: fixed;
  right: 2rem;
  cursor: pointer;
  color: var(--white);
  transition: 0.3s;

  @media only screen and (min-width: 700px) {
    &:hover {
      color: var(--pink);
    }
  }
`;

export const MenuButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 9999;
  border: none;
`;
