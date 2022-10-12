import React, { useEffect, useState } from 'react'

export function Characters() {

    const [characters,setCharacters] = useState([]);

    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
    }
    useEffect(() => {
      fetchCharacters();
    })
    
    
  return (
    <>
    {characters.map(character=> <div>{character.name}</div>)}
    </>
  )
}
