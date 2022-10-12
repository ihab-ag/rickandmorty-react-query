import React, { useState } from 'react'

export function Characters() {

    const [characters,setCharacters] = useState([]);

    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data);

    }
  return (
    <div>Characters</div>
  )
}
