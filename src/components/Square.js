import React from 'react'

// here just destructing the Square object 
const Square = ({value, onClick}) => {


  // since this Square component is a child of Board component whenever Board component rerenders the Square component also rerenders.
  // console.log("square rerender");

  
  return (
    <button type="button" className="square" onClick={onClick}>{value}</button>
  )
}

export default Square 
