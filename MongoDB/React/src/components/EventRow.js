import React from "react";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";    

const EventRow = (props) => {
    let [active, setActive] = useState(true);
    useEffect(() => {let timer = setInterval(() => {
        active === true ? setActive(false) : setActive(true)
    }, 3000)
    return () => clearInterval(timer);
});

    return(
        active === true ? 
        <div className="movieRow_container eventRow_container">
            <div className="movieRow_background swiper-prev">
                {props.events.map((m, index) => ( 
                    <EventCard eventInfo={m} cardOrder={index} />    
                ))}
            </div>
        </div>
        :
        <div className="movieRow_container eventRow_container">
            <div className="movieRow_background swiper-wrapper">
                {props.events.map((m, index) => ( 
                    <EventCard eventInfo={m} cardOrder={index} />    
                ))}
            </div>
        </div>
    );
}

export default EventRow;