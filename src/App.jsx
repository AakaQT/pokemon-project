import React from 'react'
import Search from "./components/Search.jsx"
import { useState, useEffect } from "react"
import PokemonCard from './components/PokemonCard.jsx'

const App = () => {
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [pokemonList, setPokemonList] = useState([]);

  const API_BASE_URL = "https://pokeapi.co/api/v2/";

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
    }
  }

  const fetchPokemonData = async () => {
    setErrorMessage("");
    
    try{
      const endpoint = search ? `${API_BASE_URL}pokemon/${search}`:`${API_BASE_URL}pokemon?limit=100000&offset=0`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error("Failed fetching Pokemon");
      }

      const data = await response.json();
      console.log(data)

      setPokemonList(data.results);
    }
    catch(error){
      console.error(`Failed fetching pokemon ${error}`);
      setErrorMessage("Failed to get Pokemon :(");
    }
  }

  useEffect( () => {
    fetchPokemonData();
  }, [])

  const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
      <div className="p-[20px]">
        <h1 className="text-5xl text-center">Pokemon searcher</h1>
        <Search search={search} setSearch={setSearch} />
        {errorMessage ? (<p className="text-red-500">{errorMessage}</p>) : (<ul>
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.url} name={pokemon.name} />
          ))}
        </ul>)}
      </div>

      <footer className="bg-gray-300 p-[100px] text-center">
        <p>Made by Aaka with Pokeapi <a href="https://pokeapi.co" className="underline" target="_blank">Here is their website</a></p>
      </footer>
    </div>
  )
}

export default App