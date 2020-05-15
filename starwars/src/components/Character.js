// Write your Character component here
import React from 'react'
import styled from 'styled-components';

const StyledCharacter = styled.div`
margin: 2% 2%;
background-color: #353b48;
border: 5px solid black;
color: white;

img{
    border-bottom: 5px solid black;
}

span{
    color: #A9A9A9;
}
`

export default function Character(props){
    const { name, species, origin, imgURL } = props;
    return (
        <StyledCharacter>
            <img src={imgURL} alt=""/>
            <p><span>Name:</span><br/>{name}</p>
            <p><span>Species:</span><br/>{species}</p>
            <p><span>Origin:</span><br/>{origin}</p>
        </StyledCharacter>
    )
}