import styled from "styled-components";
import { BiMenu, BiX } from "react-icons/bi";

export const Hamburger = styled(BiMenu).attrs((props) => ({
  size: "2rem",
}))`
  cursor: pointer;
  color: var(--white);
  transition: 0.3s;
  &:hover {
    color: var(--pink);
  }
`;

export const Close = styled(BiX).attrs((props) => ({
  size: "2rem",
}))`
  cursor: pointer;
  color: var(--white);
  transition: 0.3s;
  &:hover {
    color: var(--pink);
  }
`;

export const MenuButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 9999;
  border: none;
`;

export const BurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
