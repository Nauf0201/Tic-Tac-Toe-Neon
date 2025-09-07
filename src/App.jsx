import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [board, setboard] = useState(Array(9).fill(null))
  const [next, setnext] = useState(true)
  const [broadcast, setbroadcast] = useState("Click!")
  const [win, setwin] = useState(false)
  let [xscore, xsetscore] = useState(0)
  let [oscore, osetscore] = useState(0)

  function resetgame(){
    setboard(Array(9).fill(null))
    setbroadcast("Click!")
    setwin(false)
    setnext(true)
  }

  function resetscore(){
    setboard(Array(9).fill(null))
    setbroadcast("Click!")
    setwin(false)
    setnext(true)
    xsetscore(0)
    osetscore(0)
  }

  function handleClick(index){
    if(win != true){
      if (board[index] == "X" || board[index] == "O"){
        setbroadcast("already fill")
      }else{
        if (next){
          board[index] = "X"
          setnext(false)
        }
        else{
          board[index] = "O"
          setnext(true)
        }
      }
  
      if(board[0] == "X" && board[1] == "X" && board[2] == "X" || board[0] == "O" && board[1] == "O" && board[2] == "O"){
        if (board[1] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[1] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[0] == "X" && board[3] == "X" && board[6] == "X" || board[0] == "O" && board[3] == "O" && board[6] == "O"){
        if (board[0] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[0] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[1] == "X" && board[4] == "X" && board[7] == "X" || board[1] == "O" && board[4] == "O" && board[7] == "O"){
        if (board[1] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[1] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[2] == "X" && board[5] == "X" && board[8] == "X" || board[2] == "O" && board[5] == "O" && board[8] == "O"){
        if (board[2] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[2] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[3] == "X" && board[4] == "X" && board[5] == "X" || board[3] == "O" && board[4] == "O" && board[5] == "O"){
        if (board[3] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[3] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[6] == "X" && board[7] == "X" && board[8] == "X" || board[6] == "O" && board[7] == "O" && board[8] == "O"){
        if (board[6] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[6] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[0] == "X" && board[4] == "X" && board[8] == "X" || board[0] == "O" && board[4] == "O" && board[8] == "O"){
        if (board[0] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[0] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }else if(board[2] == "X" && board[4] == "X" && board[6] == "X" || board[2] == "O" && board[4] == "O" && board[6] == "O"){
        if (board[6] == 'X'){
          setbroadcast("X win!")
          setwin(true)
          xsetscore(xscore += 1)
        }
        if (board[6] == 'O'){
          setbroadcast("O win!")
          setwin(true)
          osetscore(oscore += 1)
        }
      }
      if (!board.includes(null) && win == false) {
        setbroadcast("Draw!");
        setwin(true);
      }
    }


  }

  return (
    <>
      <h1 className='m-5 text-white'>{broadcast}</h1>
      <div className='flex p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md m-5 justify-between'>
        <h2 className='text-black font-bold text-xl ml-5'>X: {xscore}</h2>
        <h2 className='text-black font-bold text-xl mr-5'>O: {oscore}</h2>
      </div>
      <div className='grid grid-cols-3 rounded-sm p-1'>
        {board.map((square, index) => {
          const clickcolor = square == "X" ? 'bg-green-500 shadow-green-500/50 hover:bg-green-500 hover:shadow-green-500/50' : square == "O" ? 'bg-yellow-500 shadow-yellow-500/50 hover:bg-yellow-500 hover:shadow-yellow-500/50' : 'bg-cyan-500';
          return (
            <div key={index}>
              <button
                onClick={() => handleClick(index)}
                className={`h-20 w-20 bg-cyan-500 m-2 hover:bg-blue-500 hover:shadow-blue-500/50 hover:scale-90 transition duration-100 rounded-lg shadow-lg shadow-cyan-500/50 text-pretty font-extrabold ${clickcolor} `}
              >
                {square}
              </button>
            </div>
          )
        })}
      </div>
      <div className='flex justify-between'>
        <button className='m-5 p-2 rounded-sm hover:scale-110 transition duration-500 text-black bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={()=>resetscore()}>Reset Game</button>
        <button className='m-5 p-2 rounded-sm hover:scale-110 transition duration-500 text-black bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={()=>resetgame()}>Continue?</button>
      </div>
    </>
  )
}

export default App