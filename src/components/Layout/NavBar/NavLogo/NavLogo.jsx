import { InternalLink } from '../../../Links/Links.styles';
import { LogoContainer, LogoImage, LogoText } from './NavLogo.styles';

const NavLogo = () => {
  return (
    <InternalLink to="/">
      <LogoContainer>
        <LogoImage
          src="images/logo-94x94.png"
          alt="japanese wooden block lotus flower"
        />
        <LogoText>
          pleasure
          <br />
          gallery
        </LogoText>
      </LogoContainer>
    </InternalLink>
  );
};

export default NavLogo;
