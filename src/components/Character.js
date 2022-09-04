import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterGalleryItem } from "./CharacterGalleryItem";
import { getCharacterData } from "./GetDataService";


const Character = () => {
    const [character, setCharacter] = useState({data: [], isLoading: false});
    const { characterId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setCharacter((character) => ({...character, isLoading: true}));
        getCharacterData(characterId)
            .then((data) => {
                setCharacter((character) => ({...character, data, isLoading: false}));
            });
    }, [characterId, navigate]);

    const nextCharacterHandler = () => {
        navigate(`/characters/${Number(characterId) + 1}`);
    };

    return (
        <>
            <div className="gallery">
                <CharacterGalleryItem char_id={character.char_id} img={character.img} name={character.name} birthday={character.birthday} nickname={character.nickname} portrayed={character.portrayed}/>
            </div>
            <button onClick={nextCharacterHandler}>Next character</button>
        </>
    );
}

export default Character;