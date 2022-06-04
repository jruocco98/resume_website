import React from 'react';
import Board from '../TicTacToe/board';
function TicTacToe(){
    return(
        <div style={{
            color: '#c2c2c2',
            textAlign: 'center',
            width: '25vw',
            height: '100%',
            marginLeft: '36%',
            marginTop:'100px',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '30px',
            paddingRight: '30px',
            fontSize: '28px',
            fontFamily: 'Gotham'
        }}>
            <p><b>Play me in a game of Tic Tac Toe!</b></p>
            <Board />
        </div>
    )
}

export default TicTacToe;