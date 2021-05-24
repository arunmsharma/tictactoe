import React , {useState}from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import "./styles/root.scss"

const App = () => {

  const [board,setBoard] = useState(Array(9).fill(null));

  const [isXNext,setIsXNext] = useState(false);

  // whenever a component updates everything inside it updates (rerendered) therefore this winnner will be updated every time

  const winner = calculateWinner(board);
  // console.log(winner);

  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`;


  const handleSquareClick = (position)=>{
    // logic that will update state
    

    // if board has 'X' or 'O' already then nothing should happen on click therefore return 
    // if we have already a winner then nothing should happen and we will return
    if(board[position] || winner){
      return;
    }


    setBoard( (prev) => {

      // map function take three arguments
      // (value,index,array)
      // for every value we update it accordingly here
      return prev.map((square,pos)=>{
        if(pos === position){
          return isXNext ? 'X':'O';
        }

        return square;
      });
    });


    // if prev state has false then change to true and vice versa.
    setIsXNext( (prev)=> !prev);
  }



  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board = {board} handleSquareClick= {handleSquareClick}/>
    </div>
  );
};

export default App;
