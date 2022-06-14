import React from "react";

const EventCard = (props) => {
  return (
    <div className="eventCard_container">
      <div className="eventCard" data-order={props.cardOrder}>
        <img
          src={props.eventInfo.image}
          alt={props.eventInfo.name}
          title={props.eventInfo.name}
        />
      </div>
      <div className="eventCardInfo">
        <h3>{props.eventInfo.name}</h3>
        <p>
          {props.eventInfo.startDate} ~ {props.eventInfo.endDate}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
