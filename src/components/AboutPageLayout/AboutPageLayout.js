import React from "react";
import "./style.css";

import PageCover from "../PageCover/PageCover";
import cvrimg from "../../assets/about_cover.png";
import {
  AboutSection,
  MedicalServicesSection,
} from "../Sections/AboutPageSections";

const AboutPageLayout = () => {
  return (
    <div>
      <PageCover imgSrc={cvrimg} imgAlt="BRCH about page cover" />
      <AboutSection />
      <MedicalServicesSection />
    </div>
  );
};

export default AboutPageLayout;
