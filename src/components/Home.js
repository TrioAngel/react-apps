import React from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Draggable>
            <div className="app-wrapper">
                <Link className="links" to='/quiz'>Quiz</Link>
                <Link className="links" to='/xando'>X&O</Link>
            </div>
        </Draggable>
    )
}

export default Home;