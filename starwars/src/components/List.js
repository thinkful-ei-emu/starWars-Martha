import React from 'react'

function List (props) {

  const list = props.characters.map((character, index) =>{
    return <li key={index}>{character}</li>
  });

  return (
    <>
    <h3>List of all matching StarWars Characters:</h3>
    <ul>
      { list }
    </ul>
    </>
  )
}

export default List 