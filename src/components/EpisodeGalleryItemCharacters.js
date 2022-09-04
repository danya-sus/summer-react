
export const EpisodeGalleryItemCharacters = (props) => {
    return (
        <ul>
            {props.characters.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
    )
}