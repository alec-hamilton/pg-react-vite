import Season from "./components/Season/Season";
import List from "./components/List/List";
import { SeasonContainer } from "./Home.styles";
import { HorizontalLine } from "../../components/Dividers/Dividers.styles";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient";

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let { data: episodes, error } = await supabase.from("episodes").select(`
            number, artist, image, mix_url,
            season: seasons (
                number,
                visual_artist: visual_artists (
                    name, website_url
                )
            )
        `);

    if (error) {
      console.log("Error", error);
    }

    else {
      let seasons = {};
      episodes.forEach((ep) => {
        let seasonNumber = ep.season.number;
        if (!seasons[seasonNumber]) {
          seasons[seasonNumber] = {
            details: {
              season: seasonNumber,
              artist: ep.season.visual_artist.name,
              site: ep.season.visual_artist.website_url,
            },
            episodes: [],
          };
        }

        seasons[seasonNumber].episodes.push({
          episode: ep.number,
          artist: ep.artist,
          img: ep.image,
          link: ep.mix_url,
        });
      });

      setData(Object.values(seasons).reverse());
    }
  }

  return (
    <>
      {data.map((season) => {
        return (
          <SeasonContainer key={season.details.season}>
            <Season seasonData={season} />
            <List seasonData={season} />
            <HorizontalLine />
          </SeasonContainer>
        );
      })}
    </>
  );
};

export default Home;
