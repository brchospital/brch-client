import React from "react";
import "./style.css";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="banner-container-info">
        <div className="banner-container-info-item">
          <h4 className="banner-container-info-item-quantity">10</h4>
          <div className="banner-container-info-line" />
          <h4 className="banner-container-info-item-title">
            წლიანი გამოცდილება
          </h4>
        </div>
        <div className="banner-container-info-item">
          <h4 className="banner-container-info-item-quantity">100</h4>
          <div className="banner-container-info-line" />
          <h4 className="banner-container-info-item-title">საწოლფონდი</h4>
        </div>
        <div className="banner-container-info-item">
          <h4 className="banner-container-info-item-quantity">200</h4>
          <div className="banner-container-info-line" />
          <h4 className="banner-container-info-item-title">
            თანამშრომლის რაოდენობა
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
