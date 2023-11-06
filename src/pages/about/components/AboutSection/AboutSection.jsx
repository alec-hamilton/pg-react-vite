import { AboutContainer } from "./About.styles";
import {
  BodyText,
  PageTitle,
} from "../../../../components/Typography/Typography.styles";
import { HorizontalLine } from "../../../../components/Dividers/Dividers.styles";

const AboutSection = () => {
  return (
    <AboutContainer>
      <PageTitle>about</PageTitle>
      <BodyText>
        Pleasure gallery is a mix series and radio show founded in Bristol by
        Alec Hamilton. It is now based in Melbourne.
      </BodyText>
      <BodyText>
        Born out of a love for the unique relationship between music and art,
        pleasure gallery mixes exist within 12 episode seasons. Each season has
        its own piece of artwork made for it and each mix reveals 1/12th of the
        whole picture. When a season finishes, the artwork is uncovered in full.
      </BodyText>
      <BodyText>
        For all enquiries please email &nbsp;
        <a href="mailto:alec@pleasuregallery.net">alec@pleasuregallery.net</a>
      </BodyText>
      <HorizontalLine />
    </AboutContainer>
  );
};

export default AboutSection;
