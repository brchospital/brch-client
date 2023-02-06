import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/brch_logo.png";

const HeaderDesktop = () => {
  return (
    <div className="header-container-desktop">
      <div className="header-logo-desktop">
        <Link to={"/"}>
          <img
            className="logo-desktop"
            src={logo}
            alt="Batumi Republican Rlinical Rospital logo"
          />
        </Link>
      </div>
      <div className="header-routes-desktop">
        <ul className="routes-list-desktop">
          <li className="route-item-desktop">
            <Link className="route-link-desktop" to={`/about`}>
              ჩვენს შესახებ
            </Link>
          </li>
          <li className="route-item-desktop">
            <Link className="route-link-desktop" to={"/posts"}>
              სიახლეები
            </Link>
          </li>
          <li className="route-item-desktop">
            <Link className="route-link-desktop" to={"/departments"}>
              დეპარტამენტები
            </Link>
          </li>
          <li className="route-item-desktop">
            <Link className="route-link-desktop" to={"/vacancies"}>
              ვაკანსიბი
            </Link>
          </li>
          <li className="route-item-desktop">
            <select className="languages-desktop">
              <option value="geo">ქართ</option>
              <option value="eng">ინგლ</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDesktop;
