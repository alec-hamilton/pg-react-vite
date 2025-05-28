import { RadioContainer, RadioShowCard, RadioShowGrid } from "./Radio.styles";
import {
  BodyText,
  PageTitle,
} from "../../../../components/Typography/Typography.styles";
import { HorizontalLine } from "../../../../components/Dividers/Dividers.styles";

const RadioSection = () => {
  const placeholderShows = [
    {
      id: 1,
      title: "Midnight Sessions Vol. 1",
      date: "March 2024",
      duration: "60 min",
      description: "Deep house and ambient soundscapes for late night listening"
    },
    {
      id: 2,
      title: "City Frequencies",
      date: "February 2024", 
      duration: "45 min",
      description: "Urban beats and underground electronic music"
    },
    {
      id: 3,
      title: "Analog Dreams",
      date: "January 2024",
      duration: "55 min", 
      description: "Vintage synthesizers and retro-futuristic compositions"
    },
    {
      id: 4,
      title: "Morning Coffee Mix",
      date: "December 2023",
      duration: "40 min",
      description: "Mellow tunes and uplifting rhythms to start your day"
    },
    {
      id: 5,
      title: "Basement Sessions",
      date: "November 2023",
      duration: "70 min",
      description: "Raw underground sounds from the depths of the electronic scene"
    },
    {
      id: 6,
      title: "Neon Nights",
      date: "October 2023",
      duration: "50 min",
      description: "Synthwave and dark electronic for nocturnal wandering"
    }
  ];

  return (
    <RadioContainer>
      <PageTitle>radio shows</PageTitle>
      <BodyText>
        Explore our collection of radio shows featuring the best in electronic music, 
        ambient soundscapes, and underground beats. Each show is carefully curated 
        to take you on a unique sonic journey.
      </BodyText>
      <RadioShowGrid>
        {placeholderShows.map((show) => (
          <RadioShowCard key={show.id}>
            <h3>{show.title}</h3>
            <p className="date">{show.date}</p>
            <p className="duration">{show.duration}</p>
            <p className="description">{show.description}</p>
            <div className="placeholder-link">Listen on SoundCloud</div>
          </RadioShowCard>
        ))}
      </RadioShowGrid>
      <HorizontalLine />
    </RadioContainer>
  );
};

export default RadioSection;