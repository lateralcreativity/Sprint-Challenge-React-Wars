import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const StyledCharacterList = styled.div`
width: 80%;
min-height: 100vh;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export default function Characters(props){
    const { characters } = props;
    return (
        <StyledCharacterList>
            {characters.map(character => {
                return <Character key={character.id} name={character.name} species={character.species} origin={character.origin.name} imgURL={character.image}/>
            })}
        </StyledCharacterList>
    )
}