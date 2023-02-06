import React from "react";
import { MedicalServicesSection } from "../Sections/DepartmentsPageSections";
import "./style.css";

const DepartmentsPageLayout = () => {
  return (
    <div className="departments-container">
      <h4 className="departments-container-title">სამედიცინო მომსახურება</h4>
      <MedicalServicesSection />
    </div>
  );
};

export default DepartmentsPageLayout;
