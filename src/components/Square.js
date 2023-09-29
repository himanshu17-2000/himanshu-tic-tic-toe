import React from 'react'


function Square({value ,borderColro , onSquareClick}) {
  return (
    <button onClick={onSquareClick}  className="square">{value}</button>
  )
}

export default Square