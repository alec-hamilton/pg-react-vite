import Season from "./components/Season/Season";
import List from "./components/List/List";
import { SeasonContainer } from "./Home.styles";
import { HorizontalLine } from "../../components/Dividers/Dividers.styles";
import mixData from "../../data/mixData";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("episodes").select(`id, season, number, artist, image, mix_url`);
    setData(data);
    console.log(data);
  }

  return (
    <>
      {mixData.map((season) => {
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
