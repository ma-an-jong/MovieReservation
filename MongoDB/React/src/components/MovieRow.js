import React from "react";
import Movie from "./Movie";

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
                    <Movie movieInfo={m} cardOrder={index} />
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