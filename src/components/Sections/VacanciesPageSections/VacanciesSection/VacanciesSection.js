import React from "react";
import { Article } from "../../../Article";
import "./style.css";

const VacanciesSection = () => {
  return (
    <div className="vacancies-section-container">
      {[...Array(4)].map((item, index) => (
        <Article key={index}/>
      ))}
    </div>
  );
};

export default VacanciesSection;
