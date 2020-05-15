// Write your Character component here
import React from 'react'

export default function Character(props){
    const { name, species, origin, imgURL } = props;
    return (
        <div className="character">
        <img src={imgURL} alt=""/>
        <p>{name}</p>
        <p>{species}</p>
        <p>{origin}</p>
        </div>
    )
}