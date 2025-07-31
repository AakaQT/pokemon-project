import React from 'react'

const PokemonCard = ({ name }) => {
  return (
    <a href={`https://google.com/search?q=${name}`} target="_blank">
    <div className="p-[20px] bg-gray-100 mb-[10px] mt-[10px] rounded-[10px]">
          <p>{name}</p>
      </div>
    </a>
  )
}

export default PokemonCard