import React from 'react'
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.css"

const Article = () => {
  return (
    <div className="vacancies-section-container-item">
      <div className="vacancies-section-container-item-head">
        <div className="vacancies-section-container-item-head-square" />
        <div className="vacancies-section-container-item-head-date-container">
          <FaCalendarAlt className="vacancies-section-container-item-head-date-icon" />
          <p className="vacancies-section-container-item-head-date">
            10/10/2023
          </p>
        </div>
      </div>
      <div className="vacancies-section-container-item-body">
        <p className="vacancies-section-container-item-text">
          ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის
          ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს. Lorem Ipsum-ის
          გამოყენებით ვღებულობთ....
        </p>
      </div>
      <Link to={`/`} className="vacancies-section-container-item-route">
        სრულად
      </Link>
    </div>
  );
}

export default Article