import React, {useState, useEffect} from "react"
import Reset from '../TicTacToe/resetBtn'
import './game.css'
import AlertDialog from "./DialogBox"
import { selectSquare } from "./game"

const Square = (props) => {

    return(
        <div className=''>
            <div 
                className='empty'
                id={props.num}
                onClick={() => selectSquare(props.num, props.row, props.col, props.board, props.setBoard, props.result, props.setResult) }>
                    
            </div>
        </div>
    )
}

function Board(){
    const[result, setResult] = useState('')
    const [board, setBoard] = useState(
        [
            ['','',''],
            ['','',''],
            ['','','']
        ])
/*         useEffect(() => {
            if (result) {
              setResult(true)
            }
          }, [result]);  */   
    return(
        <>
            <AlertDialog result={result} setResult={setResult}/>
            <div
                className=''
                id='board'> 

                <Square num='0' row='0' col='0' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='1' row='0' col='1' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='2' row='0' col='2' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='3' row='1' col='0' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='4' row='1' col='1' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='5' row='1' col='2' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='6' row='2' col='0' board={board} setBoard={setBoard} result={result} setResult={setResult}/>            
                <Square num='7' row='2' col='1' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                <Square num='8' row='2' col='2' board={board} setBoard={setBoard} result={result} setResult={setResult}/>
                
            </div>
            
            <Reset board={board} setBoard={setBoard}/>
        </>
    )
}
export default Board;