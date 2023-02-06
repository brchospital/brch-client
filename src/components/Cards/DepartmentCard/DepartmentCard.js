import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const DepartmentCard = ({ departmentImg, departmentTitle, departmentId }) => {
  return (
    <div className="department-card-container">
      <img
        className="department-card-container-image"
        src={departmentImg}
        alt="brch department"
      />
      <Link
        className="department-card-container-title"
        to={`/departments/${departmentId}`}
      >
        {departmentTitle}
      </Link>
    </div>
  );
};

export default DepartmentCard;
