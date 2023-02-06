import React, { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import "./style.css";

const Header = () => {
  const [windowWidth, setwindowWidth] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setwindowWidth({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth.width < 992 ? <HeaderMobile /> : <HeaderDesktop />;
}

export default Header;
