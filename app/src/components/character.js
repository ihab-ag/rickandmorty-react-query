import React from 'react'

const Character = ({character}) => {
  return (
    <div>
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <img src={character.image} />
    </div>
  )
}

export default Character