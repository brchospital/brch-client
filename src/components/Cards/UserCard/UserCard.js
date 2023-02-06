import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const UserCard = ({ doctorImage, doctorId, doctorName }) => {
  return (
    <div className="user-card-container">
      <img src={doctorImage} alt="salernitana" />
      <Link className="user-card-container-title" to={`doctors${doctorId}`}>
        {doctorName}
      </Link>
    </div>
  );
};

export default UserCard;
