import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
width: 100%;
background-color: #353b48;
border-bottom: 2px solid black;

h1{
    color: white;
}
`

export default function Header(){
    return (
        <StyledHeader>
            <h1>Characters</h1>
        </StyledHeader>
    )
}