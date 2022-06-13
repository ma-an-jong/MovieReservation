import React from "react";
import MainMovieCard from "./MainMovieCard";

// icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const MovieRow = (props) => {
    const prev = () => {
        
    }

    const next = () => {
        
    }

    return(
        <div className="movieRow_container">
            <div className="movieRow_background">
                {props.movies.map((m, index) => (
                    <MainMovieCard movieInfo={m} cardOrder={index} />
                ))}
            </div>

            <div className="slideController">
                <div className="prev dn" onClick={prev}><BsChevronLeft size="15"/></div>
                <div className="next" onClick={next}><BsChevronRight size="15"/></div>
            </div>
        </div>
        
    );
}

export default MovieRow;