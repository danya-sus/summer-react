import { useState, useEffect } from "react";
import { getCharactersData } from "./GetDataService";

function CharacterMenu() {
    const [name, setName] = useState('');
    const [characters, setCharacters] = useState({data: [], isLoading: false});

    const changeName = (e) => {
        setName(() => e.target.name = e.target.value)
    }

    useEffect(() => {
        setCharacters((characters) => ({...characters, isLoading: true}));
        getCharactersData(name)
            .then((data) => {
                setCharacters((characters) => ({...characters, data, isLoading: false}));
            });
    }, []);

    return (
        <>
            <div class="menu">
                <input type="text" value={name} onChange={changeName} className="characterName" placeholder="Enter name"></input>
                <button onClick={() => {
                    setCharacters((characters) => ({...characters, isLoading: true}));
                    getCharactersData(name)
                        .then((data) => {
                            setCharacters((characters) => ({...characters, data, isLoading: false}));
                            });
                            }}>Search</button>
            </div>
            <div class="gallery">
                {characters.data.map((x, i) => 
                    <div class="item" key={x.char_id}>
                        <img src={x.img} alt=""></img>
                        <h2>Name: {x.name}</h2>
                        <p>Birthday: {x.birthday}</p>
                        <p>Nickname: {x.nickname}</p>
                        <p>Portrayed: {x.portrayed}</p>
                    </div>)
                }
            </div>
        </>
    )
}

export default CharacterMenu;