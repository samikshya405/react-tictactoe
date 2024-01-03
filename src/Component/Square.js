import React from 'react'

function Square({value, onSquareClick}) {
    
   
  return (
    <button className='box' onClick={onSquareClick} >{value}</button>
  )
}

export default Square