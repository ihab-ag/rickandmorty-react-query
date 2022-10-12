import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
export Characters=() => {

    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.json();
    }

    const {data: characters, status} = useQuery(["characters"],fetchCharacters);
    
    if(status === "loading"){
    return  <div>Loading</div> }

  return (
    <>
    {characters.results.map(character=> <div>{character.name}</div>)}
    </>
  )
}
