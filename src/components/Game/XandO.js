import { calculateWinner } from "../../helpers/games/XOhelper";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Board from "./Board";
import "./Game.css";

const XandO = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(false);
    const winner = calculateWinner(board);

    const handleClick = index => {
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