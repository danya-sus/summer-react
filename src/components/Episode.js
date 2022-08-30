import { useEffect, useState } from "react"
import { getEpisodesData } from "./GetDataService";

const EpisodeList = () => {
    const [series, setSeries] = useState('');
    const [episodes, setEpisodes] = useState({data: [], isLoading: false});

    const changeSeries = (e) => {
        setSeries(() => e.target.series = e.target.value)
    }

    useEffect(() => {
        setEpisodes((episodes) => ({...episodes, isLoading: true}));
        getEpisodesData(series)
            .then((data) => {
                setEpisodes((episodes) => ({...episodes, data, isLoading: false}))
            });
    }, []);

    return (
        <>
            <div class="menu">
                <input type="text" value={series} onChange={changeSeries} className="characterName" placeholder="Enter series"></input>
                <button onClick={() => {
                    setEpisodes((episodes) => ({...episodes, isLoading: true}));
                    getEpisodesData(series)
                        .then((data) => {
                            setEpisodes((episodes) => ({...episodes, data, isLoading: false}))
                            });
                            }}>Search</button>
            </div>
            <div class="gallery">
                {episodes.data.map((x, i) => 
                    <div class="item" key={x.episode_id}>
                        <h2>Title: {x.title}</h2>
                        <p>Season: {x.season}</p>
                        <p>Episode: {x.episode}</p>
                        <p>Air date: {x.air_date}</p>
                        <p>Characters: </p>
                        <ul>
                            {x.characters.map((y, i) => <li key={i}>{y}</li>)}
                        </ul>
                        <p>Series: {x.series}</p>
                    </div>)
                }
            </div>
        </>
    )
}

export default EpisodeList;