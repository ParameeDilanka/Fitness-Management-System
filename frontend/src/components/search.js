import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";

import "./styles.css";

function PDF() {
    return (
        <div className="App">
              <MovieList />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<PDF />, rootElement);