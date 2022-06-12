import React from "react";

//components
import MovieRow from "./MovieRow";


const MovieChart = (props) => {
    return(
        <div>
            <div class="mcTitleBar">
                <h1>무비차트</h1>
                <button>전체보기 &gt; </button>
            </div>
            <div class="mcList">
                <div class="mcListContainer">
                    <MovieRow movies={props.movies} />
                </div>
            </div>
        </div>
    );
};

export default MovieChart;