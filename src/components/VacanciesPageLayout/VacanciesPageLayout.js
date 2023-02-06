import React from "react";
import "./style.css";
import { VacanciesSection } from "../Sections/VacanciesPageSections";

const VacanciesPageLayout = () => {
  return (
    <div className="vacancies-container">
      <h4 className="vacancies-container-title">გახდი ჩვენი გუნდის წევრი</h4>
      <VacanciesSection />
    </div>
  );
};

export default VacanciesPageLayout;
