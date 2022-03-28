import { calculateWinner } from "../../helpers/games/XOhelpertype";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import Board from "./Board";

const XandO = () => {
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(false);
    const winner = calculateWinner(board);

    const handleClick = (index: number) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O';

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
        return (
            <button className="new-game" onClick={() => { setBoard(Array(9).fill(null)) }}>New Game</button>
        )
    }

    return (
        <div className="app-wrapper">
            <Link className="go-back" to='/'>Go back</Link>
            <div className="app-content">
                {startNewGame()}
                <Board squares={board} onClick={handleClick} />
                <p className="turn-info">
                    {winner ? winner + ' won' : (xIsNext ? "X's turn" : "O's turn")}
                </p>
            </div>
        </div>
    )
}

export default XandO;