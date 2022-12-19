import {
  ArtistLine,
  HoverTextArtist,
  HoverTextSeasonEpisode,
  SeasonTitle,
} from "../../../../components/Typography/Typography.styles";
import {
  EpisodeTextBox,
  EpisodeTextBoxAnchor,
  GridContainer,
} from "./Season.styles";
import { ExternalLink } from "../../../../components/Links/Links.styles";

const Season = ({ seasonData }) => {
  const {
    details: { season, site, artist },
    episodes,
  } = seasonData;

  return (
    <>
      <SeasonTitle>season {season}</SeasonTitle>
      <ArtistLine>
        <ExternalLink href={site}>artwork by {artist}</ExternalLink>
      </ArtistLine>
      <GridContainer>
        {episodes.map(({ episode, img }) => {
          return (
            <img
              src={`/images/${img}`}
              alt=""
              className={"e" + episode}
              key={episode}
            />
          );
        })}
        {episodes.map(({ episode, link, artist }) => {
          return (
            <EpisodeTextBoxAnchor
              href={link}
              className={"e" + episode}
              target={link === "#" ? "_self" : link}
              key={episode}
            >
              <EpisodeTextBox>
                <HoverTextSeasonEpisode>season {season}</HoverTextSeasonEpisode>
                <HoverTextSeasonEpisode>
                  episode {episode}
                </HoverTextSeasonEpisode>
                <HoverTextArtist>{artist}</HoverTextArtist>
              </EpisodeTextBox>
            </EpisodeTextBoxAnchor>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Season;
