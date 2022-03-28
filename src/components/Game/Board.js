import React from "react";
import "./Game.css";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
    return (
        <div className="board">
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => {onClick(i)}} />
                ))
            }
        </div>
    )
}

export default Board;