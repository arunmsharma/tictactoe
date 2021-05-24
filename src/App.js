import React , {useState}from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import History from './components/History'
import StatusMessage from './components/StatusMessage'

import "./styles/root.scss"

const NEW_GAME = [
  {board: Array(9).fill(null),isXNext: true},
]

const App = () => {

  // const [board,setBoard] = useState(Array(9).fill(null));

  // const [isXNext,setIsXNext] = useState(false);

  const [history,setHistory] = useState(NEW_GAME);

  // console.log("history",history);

  const [currentMove,setCurrentMove] = useState(0);

  const current = history[currentMove];  

  // whenever a component updates everything inside it updates (rerendered) therefore this winnner will be updated every time

  const {winner,winningSquare} = calculateWinner(current.board);
  // console.log(winner);

  


  const handleSquareClick = (position)=>{
    // logic that will update state
    

    // if board has 'X' or 'O' already then nothing should happen on click therefore return 
    // if we have already a winner then nothing should happen and we will return
    if(current.board[position] || winner){
      return;
    }


    setHistory( (prev) => {

      // map function take three arguments
      // (value,index,array)
      // for every value we update it accordingly here
      const last = prev[prev.length-1];


      const newBoard = last.board.map((square,pos)=>{
        if(pos === position){
          return last.isXNext ? 'X':'O';
        }

        return square;
      });

      return prev.concat({board: newBoard, isXNext:!last.isXNext});
    });


    // if prev state has false then change to true and vice versa.
    // setIsXNext( (prev)=> !prev);
    setCurrentMove(prev => prev+1);
  }

  const moveTo = (move) => {
    setCurrentMove(move);
  }

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>TIC <span className="text-green">TAC</span> TOE</h1>
      <StatusMessage winner = {winner} current={current}/>
      <Board board = {current.board} handleSquareClick= {handleSquareClick} winningSquare={winningSquare}/>
      <button type = "button" onClick = {onNewGame}
      className ={`btn-reset ${winner ? 'active' : ''}`}>Start New Game </button>
      <h2 style = {{fontWeight:'normal'}}> Current Game History </h2>
      <History history={history} moveTo={moveTo}currentMove={currentMove}/>
      <div className="bg-balls"/>
    </div>
  );
};

export default App;
