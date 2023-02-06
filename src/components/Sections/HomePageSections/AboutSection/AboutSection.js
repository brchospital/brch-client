import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-section-banner">
        <h1 className="about-section-banner-title">
          რატომ ვირჩევთ ბათუმის რესპუბლიკურ კლინიკურ საავადმყოფოს ?
        </h1>
        <Link className="about-section-banner-button" to={`about`}>
          გაიგე მეტი
        </Link>
      </div>
      <div className="about-section-points">
        <div className="about-section-points-item">
          <div className="about-section-points-item-circle" />
          <p className="about-section-points-item-text">
            ჩვენ გთავაზობთ მაღალი ხარისხის, საერთაშორისო სტანდარტების შესაბამისს
            მომსახურებას
          </p>
        </div>
        <div className="about-section-points-item">
          <div className="about-section-points-item-circle" />
          <p className="about-section-points-item-text">
            ჰოსპიტალი აღჭურვილია თანამედროვე აპარატურით,რაც უზუსტესი
            დიაგნოსტირების საშუალებას გვაძლევს
          </p>
        </div>
        <div className="about-section-points-item">
          <div className="about-section-points-item-circle" />
          <p className="about-section-points-item-text">
            ჰოსპიტალი დაკომპლექტებულია გამოცდილი, პროფესიონალი სამედიცინო
            პერსონალით
          </p>
        </div>
        <div className="about-section-points-item">
          <div className="about-section-points-item-circle" />
          <p className="about-section-points-item-text">
            მუდმივად ვზრუნავთ პერსონალის უწყვეტ განათლებაზე
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
