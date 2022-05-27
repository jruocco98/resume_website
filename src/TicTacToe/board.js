import React, {useState} from "react"
import Reset from '../TicTacToe/resetBtn'
import './game.css'
import { selectSquare } from "./game"

const Square = (props) => {

    return(
        <div className=''>
            <div 
                className='empty'
                id={props.num}
                onClick={() => selectSquare(props.num, props.row, props.col, props.board, props.setBoard)}>
                    
            </div>
        </div>
    )
}

function Board(){
    const [board, setBoard] = useState(
        [
            ['','',''],
            ['','',''],
            ['','','']
        ])
    return(
        <>
            <div
                className=''
                id='board'
                style={{
                width:'316px',
                height:'316px',
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                background: '#181718',
                margin:'auto',
                marginBottom:'40px'
            }}> 

                <Square num='0' row='0' col='0' board={board} setBoard={setBoard}/>
                <Square num='1' row='0' col='1' board={board} setBoard={setBoard}/>
                <Square num='2' row='0' col='2' board={board} setBoard={setBoard}/>
                <Square num='3' row='1' col='0' board={board} setBoard={setBoard}/>
                <Square num='4' row='1' col='1' board={board} setBoard={setBoard}/>
                <Square num='5' row='1' col='2' board={board} setBoard={setBoard}/>
                <Square num='6' row='2' col='0' board={board} setBoard={setBoard}/>            
                <Square num='7' row='2' col='1' board={board} setBoard={setBoard}/>
                <Square num='8' row='2' col='2' board={board} setBoard={setBoard}/>
                
            </div>

            <Reset board={board} setBoard={setBoard}/>
        </>
    )
}
export default Board;