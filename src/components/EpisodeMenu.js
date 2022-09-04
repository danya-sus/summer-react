import { useState } from "react";
import { render } from "react-dom";
import EpisodeGallery from "./EpisodeGallery";

const EpisodeMenu = () => {
    const [series, setSeries] = useState('');

    const changeSeries = (e) => {
        setSeries(() => e.target.series = e.target.value)
    }

    function renderGallery() {
        render(<EpisodeGallery series={series} />, document.getElementById('episodeGalleryBlock'))
    }

    return (
        <>
            <div class="menu">
                <input type="text" value={series} onChange={changeSeries} className="characterName" placeholder="Enter series"></input>
                <button onClick={() => renderGallery()}>Search</button>
            </div>
            <div id='episodeGalleryBlock' />
        </>
    )
}

export default EpisodeMenu;