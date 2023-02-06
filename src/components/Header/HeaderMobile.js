import React from "react";
import { Link } from "react-router-dom";
import sLogo from "../../assets/brch_logo_small.png";
import SvgMenu from "../../assets/svg/menu.svg";

const HeaderMobile = () => {
  function handleMenuClic() {
    const menuId = document.getElementById("menuMobile");
    if (menuId.style.display === "block") {
      menuId.style.display = "none";
    } else {
      menuId.style.display = "block";
      menuId.style.height = "220px";
    }
  }

  return (
    <div className="header-container-mobile">
      <div className="header-navigation-mobile">
        <Link to={"/"}>
          <img
            className="header-logo-mobile"
            src={sLogo}
            alt="BRCH logo small"
          />
        </Link>
        <img
          className="header-menu-mobile"
          src={SvgMenu}
          alt="BRCH menu"
          onClick={handleMenuClic}
        />
      </div>
      <div className="header-pages-mobile" id="menuMobile">
        <div className="header-languages-mobile">
          <h3 className="header-lang-text-mobile">ENG</h3>
        </div>
        <div>
          <ul>
            <li className="route-link-item-mobile">
              <Link className="route-link-mobile" to={`/about`}>
                ჩვენს შესახებ
              </Link>
            </li>
            <li className="route-link-item-mobile">
              <Link className="route-link-mobile" to={"/posts"}>
                სიახლეები
              </Link>
            </li>
            <li className="route-link-item-mobile">
              <Link className="route-link-mobile" to={"/departments"}>
                დეპარტამენტები
              </Link>
            </li>
            <li className="route-link-item-mobile">
              <Link className="route-link-mobile" to={"/vacancies"}>
                ვაკანსიბი
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
