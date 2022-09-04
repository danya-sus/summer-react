import { useState } from "react";
import { render } from "react-dom";
import CharacterGallery from "./CharacterGallery";

function CharacterMenu() {
    const [name, setName] = useState('');

    const changeName = (e) => {
        setName(() => e.target.name = e.target.value)
    }

    function renderCharacterGallery() {
        render(<CharacterGallery name={name} />, document.getElementById('characterGalleryBlock'));
    }

    return (
        <>
            <div className="menu">
                <input type="text" value={name} onChange={changeName} className="characterName" placeholder="Enter name"></input>
                <button onClick={() => renderCharacterGallery()}>Search</button>
            </div>
            <div id='characterGalleryBlock'></div>
        </>
    )
}

export default CharacterMenu;