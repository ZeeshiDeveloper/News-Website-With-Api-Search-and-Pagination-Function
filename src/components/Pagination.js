import React, { useContext } from 'react'
import { AppContext } from './context';

const Pagination = () => {

  const {page, nbPages, getPrevPage, getNextPage} = useContext(AppContext);
  return (
    <div className='pagination-btn'>
      <button onClick={() => getPrevPage()}><span>&#60;</span></button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={() => getNextPage()}><span>&#62;</span></button>
      {/* <button class="btn-right"><i class="fa-solid fa-angle-right right-icon"></i></button> */}
    </div>
  )
}

export default Pagination;