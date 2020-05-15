import React from 'react';
import Character from './Character';

export default function Characters(props){
    const { characters } = props;
    return (
        <div className="character-list">
            {characters.map(character => {
                return <Character key={character.id} name={character.name} species={character.species} origin={character.origin.name} imgURL={character.image}/>
            })}
        </div>
    )
}