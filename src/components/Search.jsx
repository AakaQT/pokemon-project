import React from 'react'

const Search = ({ setSearch, search }) => {
  return (
    <div className="text-center mt-[10px]">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type in any pokemon name" className="w-[400px] bg-gray-100 h-[50px] p-[10px] rounded-[10px]" />
    </div>
  )
}

export default Search