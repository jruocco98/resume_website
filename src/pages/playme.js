import React from 'react';
import Board from '../TicTacToe/board';
function TicTacToe(){
    return(
        <div 
            className='page'
            id='tictactoe'>
            <p><b>Play me in a game of Tic Tac Toe!</b></p>
                 <Board style={{}} />
        </div>
    )
}

export default TicTacToe;