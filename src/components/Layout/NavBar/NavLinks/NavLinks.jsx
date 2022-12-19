import { AnimatePresence } from "framer-motion";
import { MenuLinkText, NavLinksContainer } from "./NavLinks.styles";
import { ExternalLink, InternalLink } from "../../../Links/Links.styles";

const NavLinks = ({ open, setOpen }) => {

  const closeMobileMenu = () => {
    setOpen(!open);
  };

  const menuLinksContent = [
    <InternalLink to="/" onClick={() => closeMobileMenu()}>
      home
    </InternalLink>,
    <InternalLink to="/about" onClick={() => closeMobileMenu()}>
      about
    </InternalLink>,
    <ExternalLink href="https://soundcloud.com/pleasuregallery">
      soundcloud
    </ExternalLink>,
    <ExternalLink href="https://www.instagram.com/pleasure__gallery/">
      instagram
    </ExternalLink>,
  ];

  return (
    <AnimatePresence>
      {open && (
        <NavLinksContainer
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2 }}
        >
          {menuLinksContent.map((content, index) => {
            return (
              <li key={index}>
                <MenuLinkText>{content}</MenuLinkText>
              </li>
            );
          })}
        </NavLinksContainer>
      )}
    </AnimatePresence>
  );
};

export default NavLinks;
