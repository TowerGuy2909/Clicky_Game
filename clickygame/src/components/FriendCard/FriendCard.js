import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  // <div className="card-columns">
  <div className="card-columns">
  <div className="card">
    <div className="img-container ">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
  </div>
  // </div>
);

export default FriendCard;
