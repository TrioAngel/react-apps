import React from "react";
import "./Game.css";

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className="square">{value}</button>
    )
}

export default Square;