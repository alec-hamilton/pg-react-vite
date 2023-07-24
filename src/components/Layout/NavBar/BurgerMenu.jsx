import { useState } from "react";
import { Close, Hamburger, MenuButton } from "./BurgerMenu.styles";
import NavLinks from "./NavLinks/NavLinks";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <Close aria-label="Close the menu"/> : <Hamburger aria-label="Open the menu" />}
      </MenuButton>
      <NavLinks open={open} setOpen={setOpen} />
    </>
  );
};

export default BurgerMenu;
