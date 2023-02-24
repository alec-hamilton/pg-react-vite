import styled from "styled-components";
import { motion } from "framer-motion";

export const NavLinksContainer = styled(motion.ul)`
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  margin: 0;
  padding: 5rem 3rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--black);
  z-index: 99;

  @media only screen and (min-width: 700px) {
    left: 50%;
    border-left: 1px solid var(--white);
  }

  @media only screen and (min-width: 1150px) {
    left: calc(((100% - 920px)/2) + 690px);
  }

  @media only screen and (min-width: 1650px) {
    left: calc(((100% - 920px)/2) + 920px)
  }
`;

export const MenuLinkText = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--white);
  text-decoration: none;
  transition: 0.3s;
  transition-property: color;
  padding: 0.6rem;
  margin: 0.5rem 0;

  @media only screen and (min-width: 952px) {
    padding: 1rem;
  }
`;
