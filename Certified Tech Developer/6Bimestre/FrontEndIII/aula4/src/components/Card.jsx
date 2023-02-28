import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#efefef",
        width: "182px",
        height: "210px",
        borderRadius: "8px",
        display: "grid",
        justifyContent: "center",

      }}
    >
      <img
        style={{ width: "157px", height: "115px", borderRadius: "8px" }}
        src={props.image}
        alt={props.title}
      />
      <h1 style={{ color: "#757575", fontSize: "18px", textAlign: 'center' }}>{props.title}</h1>
      <h2 style={{ color: "#757575", fontSize: "14px", textAlign: 'center' }}>
        {props.description}
      </h2>
    </div>
  );
};

export default Card;
