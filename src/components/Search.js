import React, { useContext } from 'react'
import { AppContext } from './context';

const Search = () => {
  const {query, searchPost} = useContext(AppContext);

  return (
    <div>
      <h1>News Website With Api,Search and Pagination Function</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder='Search Here'
          value={query}
          onChange={(e) => searchPost(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}   

export default Search;