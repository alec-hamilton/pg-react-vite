import { useState } from "react";
import {
  BurgerMenuContainer,
  Close,
  Hamburger,
  MenuButton,
} from "./BurgerMenu.styles";
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
        {open ? <Close /> : <Hamburger />}
      </MenuButton>
      <NavLinks open={open} setOpen={setOpen} />
    </>
  );
};

export default BurgerMenu;
