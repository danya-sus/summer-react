import { EpisodeGalleryItemCharacters } from "./EpisodeGalleryItemCharacters"

export const EpisodeGalleryItem = (props) => {
    return (
        <div className="item">
            <h2>Title: {props.title}</h2>
            <p>Season: {props.season}</p>
            <p>Episode: {props.episode}</p>
            <p>Air date: {props.air_date}</p>
            <p>Characters: </p>
            <ul>
                {props.characters.map((y, i) => <li key={i}>{y}</li>)}
            </ul>
            <p>Series: {props.series}</p>
        </div>
    )
}