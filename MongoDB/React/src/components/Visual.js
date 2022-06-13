import React from "react";

function Viusal() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/img/visual.png"}
        alt="visual"
        title="visual"
      />
    </div>
  );
}

export default Viusal;
