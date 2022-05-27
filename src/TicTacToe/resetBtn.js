import React from 'react'
function Reset(props){

    return(
        <button Style='font-size: 25px' onClick={() => resetBoard(props.board, props.setBoard)}>Reset</button>
    )
}

function resetBoard(board, setBoard){
    let tempArr = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    setBoard(tempArr)
    setSquaresEmpty()

    let x = document.getElementById('board')
    x.className = ''
}
function setSquaresEmpty(){
    let x = []
    for(let i = 0; i < 9; i++){
        x[i] = document.getElementById(i)
        if(x[i].className !== 'empty'){
            x[i].className = 'empty'
        }
    }
     

    if(x != null){

    }
}
export default Reset
