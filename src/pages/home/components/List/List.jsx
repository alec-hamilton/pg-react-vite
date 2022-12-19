import { VerticalLine } from "../../../../components/Dividers/Dividers.styles";
import { ExternalLink } from "../../../../components/Links/Links.styles";
import { ListEpisodeText } from "../../../../components/Typography/Typography.styles";
import {
  ListContainer,
  ListEpisodeNumber,
  ListLeft,
  ListRight,
  ListTableData,
} from "./List.styles";

const List = ({ seasonData }) => {
  const firstHalfEpisodes = seasonData.episodes.filter(
    (episode) => episode.episode <= 6
  );
  const secondHalfEpisodes = seasonData.episodes.filter(
    (episode) => episode.episode >= 7
  );

  return (
    <ListContainer>
      <ListLeft>
        <tbody>
          {firstHalfEpisodes.map(({ episode, link, artist }, index) => {
            return (
              <tr key={index}>
                <ListEpisodeNumber>e{episode}</ListEpisodeNumber>
                <ListTableData>
                  <ListEpisodeText>
                    <ExternalLink href={link}>
                      {artist === "?" ? "" : artist}
                    </ExternalLink>
                  </ListEpisodeText>
                </ListTableData>
              </tr>
            );
          })}
        </tbody>
      </ListLeft>
      <VerticalLine />
      <ListRight>
        <tbody>
          {secondHalfEpisodes.map(({ episode, link, artist }, index) => {
            return (
              <tr key={index}>
                <ListEpisodeNumber>e{episode}</ListEpisodeNumber>
                <ListTableData>
                <ListEpisodeText>
                    <ExternalLink href={link}>
                      {artist === "?" ? "" : artist}
                    </ExternalLink>
                  </ListEpisodeText>
                </ListTableData>
              </tr>
            );
          })}
        </tbody>
      </ListRight>
    </ListContainer>
  );
};

export default List;
