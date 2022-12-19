import NavLogo from "./NavLogo/NavLogo";
import { TopNav } from "./NavBar.styles";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  return (
    <TopNav>
      <NavLogo />
      <BurgerMenu />
    </TopNav>
  );
};

export default NavBar;
