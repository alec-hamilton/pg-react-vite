import { ExternalLink } from "../../Links/Links.styles";
import {
  FooterLine,
  FooterLinks,
  FooterLinksItem,
  FooterLogo,
  FooterLogoContainer,
} from "./Footer.styles";

const Footer = () => {
  const footerLinksContent = [
    <ExternalLink href="https://soundcloud.com/pleasuregallery">
      soundcloud
    </ExternalLink>,
    "/",
    <ExternalLink href="https://www.instagram.com/pleasure__gallery/">
      instagram
    </ExternalLink>,
  ];

  return (
    <footer>
      <FooterLogoContainer>
        <FooterLogo src="images/pg-vector-white.svg" alt="" />
      </FooterLogoContainer>
      <FooterLinks>
        {footerLinksContent.map((content, index) => {
          return <FooterLinksItem key={index}>{content}</FooterLinksItem>;
        })}
      </FooterLinks>
      <FooterLine>
        <ExternalLink href="https://github.com/alec-hamilton/pg-fe">
          site designed and built by alec hamilton
        </ExternalLink>
      </FooterLine>
    </footer>
  );
};

export default Footer;
