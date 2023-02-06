import React, { useState, useEffect } from "react";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";
import "./style.css";

const Footer = () => {
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

  return windowWidth.width < 992 ? <FooterMobile /> : <FooterDesktop />;
}

export default Footer;
