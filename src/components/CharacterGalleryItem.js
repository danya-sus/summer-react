import { Link } from 'react-router-dom';

export const CharacterGalleryItem = (props) => {
    return (
        <div className="item">
            <img src={props.img} alt="" />
            <h2>Name: {props.name}</h2>
            <p>Birthday: {props.birthday}</p>
            <p>Nickname: {props.nickname}</p>
            <p>Portrayed: {props.portrayed}</p>
        </div>
    )
}