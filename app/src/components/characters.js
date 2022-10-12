import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
export function Characters() {


    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.results.json();
    }

    const {data: characters, status} = useQuery("characters",fetchCharacters);
    
    if(status === "loading"){
    return  <div>Loading</div> }

  return (
    <>
    {characters.map(character=> <div>{character.name}</div>)}
    </>
  )
}
