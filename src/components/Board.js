import React from 'react';
import Square from './Square';

// react hooks are just the functions which are exported from the official react package and they allow us to manipulate componenets in a different manner.
// A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.
// useState is a hook , all hooks start with use keyword 
//  It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState()




/* react lifecycle event :-
react lifecycle events are just a set of event that take place at somepoint when component is inserted, being updated , being removed from the webpage.

there are basically three stages for component lifecycle.
1. Mounting.
2. Updating.
3. UnMounting.
*/

// board has two props incoming from App (its parent)
const Board = ({board,handleSquareClick}) => {

  /* Moved to App.js for state sharing events */
  // const [board,setBoard] = useState(Array(9).fill(null));

  // const [isXNext,setIsXNext] = useState(false);


  // we can see this console log because of lifecycle events
  // console.log(board);






   /* Moved to App.js for state sharing events */
  // const handleSquareClick = (position)=>{
  //   // logic that will update state
    

  //   // if board has 'X' or 'O' already then nothing should happen on click therefore return 
  //   if(board[position]){
  //     return;
  //   }


  //   setBoard( (prev) => {

  //     // map function take three arguments
  //     // (value,index,array)
  //     // for every value we update it accordingly here
  //     return prev.map((square,pos)=>{
  //       if(pos === position){
  //         return isXNext ? 'X':'O';
  //       }

  //       return square;
  //     });
  //   });


  //   // if prev state has false then change to true and vice versa.
  //   setIsXNext( (prev)=> !prev);
  // }

  // it is a callback function that returns the Square component
  const renderSquare = (position) =>{

    // here we add onClick event handler and it takes a valid JSX syntax 
    // here we are giving it a callback function which handles the clicking event 
    return <Square value = {board[position]} onClick = { () => handleSquareClick(position)}/>
  }
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
