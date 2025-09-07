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
  const [winningLine, setWinningLine] = useState([])
  let [xscore, xsetscore] = useState(0)
  let [oscore, osetscore] = useState(0)

  const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]

  function resetgame(){
    setboard(Array(9).fill(null))
    setbroadcast("Click!")
    setwin(false)
    setnext(true)
    setWinningLine([])
  }

  function resetscore(){
    setboard(Array(9).fill(null))
    setbroadcast("Click!")
    setwin(false)
    setnext(true)
    xsetscore(0)
    osetscore(0)
    setWinningLine([])
  }

  function checkWinner(newBoard){
    for (let combo of winningCombinations){
    const [a,b,c] = combo
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]){
        setbroadcast(`${newBoard[a]} win!`)
        setwin(true)
        setWinningLine(combo)
        if(newBoard[a] === 'X') xsetscore(xscore+=1)
        else osetscore(oscore+=1)
        return
      }
    }
    if (!newBoard.includes(null)){
      setbroadcast("Draw!")
      setwin(true)
    }
  }

  function handleClick(index){
    if(win || board[index]){
      setbroadcast("Already fill")
      return
    }
    const newBoard = [...board]
    newBoard[index] = next ? "X" : "O"
    setboard(newBoard)
    setnext(!next)
    checkWinner(newBoard)
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
          // const clickcolor = square == "X" ? 'bg-green-500 shadow-green-500/50 hover:bg-green-500 hover:shadow-green-500/50' : square == "O" ? 'bg-yellow-500 shadow-yellow-500/50 hover:bg-yellow-500 hover:shadow-yellow-500/50' : 'bg-cyan-500';
          const isWinningSquare = winningLine.includes(index)
          const clickcolor = isWinningSquare ? 'bg-red-500 shadow-red-500/70 hover:bg-red-600'
          : square === "X" ? 'bg-green-500 shadow-green-500/50 hover:bg-green-600'
          : square === "O" ? 'bg-yellow-500 shadow-yellow-500/50 hover:bg-yellow-600'
          : 'bg-cyan-500 hover:bg-blue-500 hover:shadow-blue-500/50'
          return (
            <div key={index}>
              <button
                onClick={() => handleClick(index)}
                className={`h-20 w-20 bg-cyan-500 m-2 hover:bg-blue-500 hover:scale-90 transition duration-100 rounded-lg shadow-lg shadow-cyan-500/50 text-pretty font-extrabold ${clickcolor} ${isWinningSquare ? "winning-square" : ""}`}
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