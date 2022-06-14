import React from "react";

//components
import EventRow from './EventRow';

const MovieChart = (props) => {
    return(
        <div>
            <div class="mcTitleBar">
                <h1>EVENT</h1>
                <button>전체보기 &gt; </button>
            </div>
            <div class="mcList">
                <div class="mcListContainer">
                    <EventRow events={props.events} />
                </div>
            </div>
        </div>
    );
};

export default MovieChart;