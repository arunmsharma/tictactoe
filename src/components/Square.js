import React from 'react'

// here just destructing the Square object 
const Square = ({value, onClick, isWinningSquare}) => {


  // since this Square component is a child of Board component whenever Board component rerenders the Square component also rerenders.
  // console.log("square rerender");

  
  return (
    <button type="button" onClick={onClick} 
    className = {`square ${isWinningSquare ? 'winning':''} ${value === 'X'? 'text-green' : 'text-orange'}`}
    >{value}</button>
  )
}

export default Square 
