import React from 'react';
import Square from './square';

const Board = (props) => {
    
    let sqArray = new Array(9).fill(null)
    const [squares, setSquares] = React.useState(sqArray)
    const [history, setHistory] = React.useState([])
    const [isXnext, setiIsXnext] = React.useState(true)
    const [, setDate] = React.useState(Date.now());
    const winner = React.useRef(false)
    const [steps, setSteps] = React.useState(0);

    const isItWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        // console.log(squares);
        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            // const element = lines[index];
            // console.log(square);
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return true
            }
        }
        return false
    }
    
    const handleClick = (arg) => {
        const square = squares.slice();
        square[arg] =  isXnext ? 'X' : 'O';
        setSquares((arr) => [...square]);
        setDate(new Date())
        winner.current = isItWinner(square);
        setiIsXnext( () => !isXnext)
        // let historyy = [ {"square": square } ]
        setHistory((prev) => {
            console.log(square);
            return [...prev, ...square]
        })
        if (winner.current) return false
    }

    const status = isXnext ? 'X' : 'O';
    
    return(
    <div className="sq-container-holder" >
        <p>Next Player is: {status} </p>
        <p style={{'display': winner.current ? 'block': 'none'}} >Winner is {isXnext ? 'O' : 'X'}</p>
        <div className="squareContainer">
        {squares.map( (val, index) => 
        <Square values={index} habdleParentClick={ (arg) => handleClick(arg)} > {val} </Square>
        )}
        </div>
    </div>
    )
}

export default Board