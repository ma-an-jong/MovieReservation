import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
    return(
        <>
            <div className="container">
                <div className="moviesTitle">
                    <h2>무비차트</h2>
                    <div></div>
                </div>
                <div class="moviesMenu">
                    <div>
                        <select>
                            <option value="reservation">예매율순</option>
                            <option value="grade">평점순</option>
                        </select>
                        <button>GO</button>
                    </div>
                </div>

                <div class="moviesContainer">
                    {props.movies.map((m, index) => (
                        <Movie movieInfo={m} cardOrder={index} />
                    ))}
                </div> 
            </div>
        </>
    );
}

export default Movies;