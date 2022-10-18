import React, { useContext } from 'react'
import { AppContext } from './components/context'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Stories from './components/Stories'

const App = () => {

  const context = useContext(AppContext);
  
  return (
    <div>
      <h2>APP</h2>
      News Website With Api,Search and Pagination Function
      <br />
      {context}
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App
