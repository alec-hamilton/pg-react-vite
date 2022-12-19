import { useState } from "react";
import { BurgerMenuContainer, Close, Hamburger } from "./BurgerMenu.styles";
import NavLinks from "./NavLinks/NavLinks";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <Hamburger
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closedIcon = (
    <Close
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  return (
    <BurgerMenuContainer>
      {open ? closedIcon : hamburgerIcon}
      <NavLinks open={open} setOpen={setOpen} />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
