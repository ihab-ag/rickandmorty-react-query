import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Character from './character';
export const Characters=() => {

    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.json();
    }

    const {data: characters, status} = useQuery(["characters"],fetchCharacters);
    
    if(status === "loading"){
    return  <div>Loading</div> }

  return (
    <>
    {characters.results.map(character=> <Character character={character} />)}
    </>
  )
}
