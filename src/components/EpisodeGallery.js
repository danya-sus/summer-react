import { useState, useEffect } from "react";
import { getEpisodesData } from "./GetDataService";
import { EpisodeGalleryItem } from "./EpisodeGalleryItem";

function EpisodeGallery(props) {
    const series = props.series;
    const [episodes, setEpisodes] = useState({data: [], isLoading: false});

    useEffect(() => {
        setEpisodes((episodes) => ({...episodes, isLoading: true}));
        getEpisodesData(series)
            .then((data) => {
                setEpisodes((episodes) => ({...episodes, data, isLoading: false}))
            });
    }, []);

    const element = (
        <div className="gallery">
            {episodes.data.map((x, i) => 
              <EpisodeGalleryItem key={x.episode_id} title={x.title} season={x.season} episode={x.episode} air_date={x.air_date} characters={x.characters} series={x.series} />
            )}
        </div>
    );

    return element;
}

export default EpisodeGallery;