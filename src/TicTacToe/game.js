export function selectSquare(num, row, col, board, setBoard){

    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    
    if(board[row][col] === ''){
        
        
        let z = document.getElementsByClassName('enabled')
        z[0].className = 'disabled'

        let square = document.getElementById(num)
        square.className = 'x'

        tempArray[row][col] = 'x'
        setBoard(tempArray)  
    }
    else{   
        let z = document.getElementsByClassName('disabled')    
        if(typeof(z[0]) !== 'undefined')
            z[0].className = 'enabled'
        return
    }

    setTimeout(checkWinner, 200, 'x', tempArray)
    setTimeout(computerTurn, 600, tempArray, setBoard)   
}

function computerTurn(board, setBoard){
    
    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    
    let flag  = false
    for(let i = 0; i < 3; i++){
        if(board[i].includes('')){
            flag = true
        }
    }
    if(!flag){
        
        let z = document.getElementsByClassName('disabled')
        z[0].className = 'enabled'
        return
    }

    //sets board 
    let num = perfectMove(board, setBoard)   
    let x = document.getElementById(num)
   
    //sets css
    if(typeof(x) != 'undefined'){
        x.className = 'o'    
    }

    let z = document.getElementsByClassName('disabled')
    z[0].className = 'enabled'      
}

function perfectMove(board, setBoard){

    //check for win
    let num = -1
    if((num = moveForWin(board, setBoard)) > -1){}
    //block win
    else if((num = blockWin(board, setBoard)) > -1){}
    //fork
    else if((num = makeFork(board, setBoard)) > -1){}
    //block fork
    else if((num = blockFork(board, setBoard)) > -1){}  
    //take center
    else if(board[1][1] === ''){
        board[1][1] = 'o'
        setBoard(board)
        num = 4
        
    }
    //take opposite corner
    else if(board[0][0] === '' && board[2][2] === 'x'){
        board[0][0] = 'o'
        
        setBoard(board)
        num = 0
    }
    else if(board[2][2] === '' && board[0][0] === 'x'){
        board[2][2] = 'o'
        setBoard(board)
        num = 8          
    }
    else if(board[0][2] === '' && board[2][0] === 'x'){
        board[0][2] = 'o'
        setBoard(board)
        num = 2
    }
    else if(board[2][0] === '' && board[0][2] === 'x'){
        board[2][0] = 'o'
        setBoard(board)
        num = 6
    }
    //take empty corner   
    else if(board[0][0] === ''){
        
        board[0][0] = 'o'
        setBoard(board)
        num = 0

    }
    else if(board[2][2] === ''){
                 
        board[2][2] = 'o'
        setBoard(board)
        num = 8
    }
    else if(board[0][2] === ''){
        
        board[0][2] = 'o'
        setBoard(board)
        num = 2
    }
    else if(board[2][0] === ''){
        board[2][0] = 'o'
        setBoard(board)
        num = 6
    }
    //take empty side
    else if(board[0][1] === ''){
        board[0][1] = 'o'
        setBoard(board)
        num = 1   
    }
    else if(board[1][0] === ''){
        board[1][0] = 'o'
        setBoard(board)
        num = 3         
    }
    else if(board[1][2] === ''){
        board[1][2] = 'o'
        setBoard(board)
        num = 5
    }
    else if(board[2][1] === ''){
        board[2][1] = 'o'
        setBoard(board)
        num = 7
    }

    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }

    let counter = 0
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(counter === num){
                tempArray[i][j] = 'o'     
            }
            counter++
        }
    }
    setTimeout(checkWinner,100, 'o', tempArray)
    return num
}

function blockFork(board, setBoard){
    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            
            if(board[i][j] === ''){

                let tempArr = []

                for (let k = 0; k < board.length; k++){
                    tempArr[k] = board[k].slice()
                }

                let wins = 0

                tempArr[i][j] = 'x'
                let counter = 0
                
                //check col
                for(let k = 0; k < 3; k++){
                    
                    if(tempArr[i][k] === 'o'){
                        counter = 0
                        break
                    }
                    if(tempArr[i][k] === 'x'){
                        counter++    
                    }  
                    
                    if(counter === 2 && k === 2){
                        counter = 0
                        wins++
                    }  
                }
                //check row
                counter = 0
                for(let k = 0; k < 3; k++){
                    if(tempArr[k][j] === 'o'){
                        counter = 0
                        break
                    }                 
                    if(tempArr[k][j] === 'x'){
                        counter++    
                    } 
                    
                    if(counter === 2 && k === 2){
                        counter = 0
                        wins++                     
                    } 
                }
                //check diagonal
                if(i ===j){
                    counter = 0
                    for(let k = 0; k < 3; k++){
                        if(tempArr[k][k] === 'o'){
                            
                            counter = 0
                            break
                        }                    
                        if(tempArr[k][k] === 'x'){
                            counter++    
                        } 
                        if(counter === 2 && k === 2){
                            counter = 0
                            wins++
                        } 
                    }
                }
                //check anti diagonal
                if((i + j) === 2){ 
                    
                    counter = 0               
                    for(let k = 0; k < 3; k++){
                        
                        if(tempArr[k][2 - k] === 'o'){
                            counter = 0
                            break
                        }                     
                        if(tempArr[k][(2) - k] === 'x'){
                            counter++    
                        }                    
                        if(counter === 2 && k === 2){
                            counter = 0
                            wins++                 
                        } 
                    }
                }
                if(wins > 1){
                    tempArray[i][j] = 'o'
                    setBoard(tempArray)

                    let num = 0
                    for(let l = 0; l < 3; l++){
                        for(let m = 0; m < 3; m++) {

                            if(l === i && m ===j){
                                return num
                            }
                            num++
                        }         
                    }
                }
            }
        }
    }
    return -1
}
function makeFork(board, setBoard){
    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            
            if(board[i][j] === ''){

                let tempArr = []

                for (let k = 0; k < board.length; k++){
                    tempArr[k] = board[k].slice()
                }

                let wins = 0

                tempArr[i][j] = 'o'
                let counter = 0
                
                //check col
                for(let k = 0; k < 3; k++){
                    
                    if(tempArr[i][k] === 'x'){
                        counter = 0
                        break
                    }
                    if(tempArr[i][k] === 'o'){
                        counter++    
                    }  
                    
                    if(counter === 2 && k === 2){
                        counter = 0
                        wins++
                    }  
                }
                //check row
                counter = 0
                for(let k = 0; k < 3; k++){
                    if(tempArr[k][j] === 'x'){
                        counter = 0
                        break
                    }                 
                    if(tempArr[k][j] === 'o'){
                        counter++    
                    } 
                    
                    if(counter === 2 && k === 2){
                        counter = 0
                        wins++                      
                    } 
                }
                //check diagonal
                if(i ===j){
                   
                    counter = 0
                    for(let k = 0; k < 3; k++){
                        if(tempArr[k][k] === 'x'){
                            
                            counter = 0
                            break
                        }                    
                        if(tempArr[k][k] === 'o'){
                            counter++    
                        } 
                        
                        if(counter === 2 && k === 2){
                            counter = 0
                            wins++                    
                        } 
                    }
                }
                //check anti diagonal
                if((i + j) === 2){ 
                    
                    counter = 0               
                    for(let k = 0; k < 3; k++){
                        
                        if(tempArr[k][2 - k] === 'x'){
                            counter = 0
                            break
                        }                     
                        if(tempArr[k][(2) - k] === 'o'){
                            counter++    
                        }                    
                        if(counter === 2 && k === 2){
                            counter = 0
                            wins++                    
                        } 
                    }
                }
                if(wins > 1){
                    tempArray[i][j] = 'o'
                    setBoard(tempArray)

                    let num = 0
                    for(let l = 0; l < 3; l++){
                        for(let m = 0; m < 3; m++) {

                            if(l === i && m ===j){
                                return num
                            }
                            num++
                        }         
                    }
                }
            }
        }
    }
    return -1
}
function blockWin(board, setBoard){
    
    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){  
            if(board[i][j] === ''){
                let counter = 0

                //check col
                for(let k = 0; k < 3; k++){
                    
                    if(k !== j){
                        if(board[i][k] === 'x'){
                            counter++    
                        }  
                    }
                    if(counter === 2){

                        counter = 0
                        tempArray[i][j] = 'o'
                        setBoard(tempArray)

                        let num = 0
                        for(let l = 0; l < 3; l++){
                            for(let m = 0; m < 3; m++) {

                                if(l === i && m ===j){
                                    return num
                                }
                                num++
                            }         
                        }
                    }  
                }
                //check row
                counter = 0
                for(let k = 0; k < 3; k++){
                    
                    if(k !== i){
                        if(board[k][j] === 'x'){
                            counter++    
                        } 
                    }
                    if(counter === 2){
                        counter = 0
                        tempArray[i][j] = 'o'
                        setBoard(tempArray)

                        let num = 0
                        for(let l = 0; l < 3; l++){
                            for(let m = 0; m < 3; m++) {

                                if(l === i && m ===j){
                                    return num
                                }
                                num++
                            }         
                        }                      
                    } 
                }

                //check diagonal
                if(i ===j){
                    counter = 0
                    for(let k = 0; k < 3; k++){
                    
                        if(k !== j){
                            if(board[k][k] === 'x'){
                                counter++    
                            } 
                        }
                        if(counter === 2){
                            counter = 0
                            tempArray[i][j] = 'o'
                            setBoard(tempArray)

                            let num = 0
                            for(let l = 0; l < 3; l++){
                                for(let m = 0; m < 3; m++) {
    
                                    if(l === i && m ===j){
                                        return num
                                    }
                                    num++
                                }         
                            }                     
                        } 
                    }
                }
                //check anti diagonal
                if((i + j) === 2){ 
                    counter = 0               
                    for(let k = 0; k < 3; k++){
                        
                        if(k !== i){
                            if(board[k][(2) - k] === 'x'){
                                counter++    
                            } 
                        }
                        if(counter === 2){
                            counter = 0
                            tempArray[i][j] = 'o'
                            setBoard(tempArray)

                            let num = 0
                            for(let l = 0; l < 3; l++){
                                for(let m = 0; m < 3; m++) {
    
                                    if(l === i && m ===j){
                                        return num
                                    }
                                    num++
                                }         
                            }                     
                        } 
                    }
                }
            }
        }
    }
    return -1
}
function moveForWin(board, setBoard){
    
    let tempArray = []
    for (let i = 0; i < board.length; i++){
        tempArray[i] = board[i].slice()
    }
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            
            if(board[i][j] === ''){
                let counter = 0

                //check col
                for(let k = 0; k < 3; k++){
                    
                    if(k !== j){
                        if(board[i][k] === 'o'){
                            counter++    
                        }  
                    }
                    if(counter === 2){
                        counter = 0                       
                        tempArray[i][j] = 'o'
                        setBoard(tempArray)

                        let num = 0
                        for(let l = 0; l < 3; l++){
                            for(let m = 0; m < 3; m++) {

                                if(l === i && m ===j){
                                    return num
                                }
                                num++
                            }         
                        }
                    }  
                }
                //check row
                counter = 0
                for(let k = 0; k < 3; k++){
                    
                    if(k !== i){
                        if(board[k][j] === 'o'){
                            counter++    
                        } 
                    }
                    if(counter === 2){
                        counter = 0
                        tempArray[i][j] = 'o'
                        setBoard(tempArray)

                        let num = 0
                        for(let l = 0; l < 3; l++){
                            for(let m = 0; m < 3; m++) {

                                if(l === i && m ===j){
                                    return num
                                }
                                num++
                            }         
                        }                      
                    } 
                }
                //check diagonal
                if(i ===j){
                    counter = 0
                    for(let k = 0; k < 3; k++){
                    
                        //if center is taken by x break
                        if(board[1][1] === 'x'){
                            break
                        }
                        if(k !== j){
                            if(board[k][k] === 'o'){
                                counter++    
                            } 
                        }
                        if(counter === 2){
                            counter = 0
                            tempArray[i][j] = 'o'
                            setBoard(tempArray)

                            let num = 0
                            for(let l = 0; l < 3; l++){
                                for(let m = 0; m < 3; m++) {
    
                                    if(l === i && m ===j){
                                        return num
                                    }
                                    num++
                                }         
                            }                     
                        } 
                    }
                }
                //check anti diagonal
                if((i + j) === 2){ 
                    counter = 0               
                    for(let k = 0; k < 3; k++){
                        
                        //if center is taken by x break
                        if(board[1][1] === 'x'){
                            break
                        }
                        if(k !== i){
                            if(board[k][(2) - k] === 'o'){
                                counter++    
                            } 
                        }
                        if(counter === 2){
                            counter = 0
                            tempArray[i][j] = 'o'
                            setBoard(tempArray)

                            let num = 0
                            for(let l = 0; l < 3; l++){
                                for(let m = 0; m < 3; m++) {
    
                                    if(l === i && m ===j){
                                        return num
                                    }
                                    num++
                                }         
                            }                    
                        } 
                    }
                }
            }
        }
    }

    return -1
}
function setGameEnd(setGameOver){
    let x = document.getElementById('board')
    x.className = 'disabled'
}
function checkWinner(player, board){    
    let counter = 0
    
    for(let i = 0; i < 3; i++){
        counter = 0
    
        //check col
        for(let j = 0; j < 3; j++){                              
            if(board[i][j] === player){
                counter++    
            }  
            
            if(counter === 3){
                counter = 0
                alert(player + " wins!")
                setGameEnd()
                return
            }  
        }   
        //check row
        counter = 0 
        for(let j = 0; j < 3; j++){ 
            
   
            if(board[j][i] === player){
                counter++    
            } 
            
            if(counter === 3){
                counter = 0
                alert(player + " wins!") 
                setGameEnd()
                return                      
            } 
        }
    }   
    //check diagonal 
    counter = 0          
    for(let j = 0; j < 3; j++){
        
        if(board[j][j] === player){
            counter++    
        } 
                
        if(counter === 3){
            counter = 0
            alert(player + " wins!")
            setGameEnd()
            return                     
        }             
    }
    //check anti diagonal
    counter = 0 
    for(let j = 0; j < 3; j++) {
                    
              
        if(board[j][(2) - j] === player){
            counter++    
        } 
        if(counter === 3){
            counter = 0
            alert(player + " wins!")
            setGameEnd()
            return                     
        }     
    }           
    //call tie
    for(let i = 0; i < 3; i++){
        if(board[i].includes('')){
            return
        }       
    }
    alert('Tie!')
}

