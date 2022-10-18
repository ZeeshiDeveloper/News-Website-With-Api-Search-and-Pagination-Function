import React, { useContext } from 'react'
import { AppContext } from './context';

const Search = () => {
    const context = useContext(AppContext)
  return (
    <div>
      <h2>Search</h2>
      Use useContext Hook here : {context}
      <br />
      <br />
    </div>
  )
}   

export default Search;