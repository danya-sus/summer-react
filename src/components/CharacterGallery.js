import { useState, useEffect } from "react";
import { getCharactersData } from "./GetDataService";
import { CharacterGalleryItem } from "./CharacterGalleryItem";

function CharacterGallery(props) {
    const name = props.name;
    const [characters, setCharacters] = useState({data: [], isLoading: false});

    useEffect(() => {
        setCharacters((characters) => ({...characters, isLoading: true}));
        getCharactersData(name)
            .then((data) => {
                setCharacters((characters) => ({...characters, data, isLoading: false}));
            });
    }, []);

    const element = (
        <div className="gallery">
            {characters.data.map((x, i) => 
                <CharacterGalleryItem key={x.char_id} char_id={x.char_id} img={x.img} name={x.name} birthday={x.birthday} nickname={x.nickname} portrayed={x.portrayed}/>
            )}
        </div>
    );

    return element;
}

export default CharacterGallery;