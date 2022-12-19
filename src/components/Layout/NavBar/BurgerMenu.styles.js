import styled from "styled-components";
import { BiMenu, BiX } from "react-icons/bi";

export const Hamburger = styled(BiMenu).attrs((props) => ({
  size: "2rem",
}))`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  z-index: 99;
  color: var(--white);
  transition: 0.3s;
  &:hover {
    color: var(--pink);
  }
`;

export const Close = styled(BiX).attrs((props) => ({
  size: "2rem",
}))`
  position: fixed;
  right: 2rem;
  cursor: pointer;
  z-index: 99;
  color: var(--white);
  transition: 0.3s;
  &:hover {
    color: var(--pink);
  }
`;

export const BurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
