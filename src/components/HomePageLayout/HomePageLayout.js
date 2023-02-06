import React from "react";
import "./style.css";

// IMPORTS
import PageCover from "../PageCover/PageCover";
import {
  AboutSection,
  NewsSection,
  BannerSection,
  DepartmentsSection,
} from "../Sections/HomePageSections";

import cover from "../../assets/cover.png";

const HomePageLayout = () => {
  return (
    <div>
      <PageCover imgSrc={cover} imgAlt={"BRCH home page cover"} />
      <AboutSection />
      <NewsSection />
      <BannerSection />
      <DepartmentsSection />
    </div>
  );
};

export default HomePageLayout;
