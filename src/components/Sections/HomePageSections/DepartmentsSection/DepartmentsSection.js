import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { DepartmentCard } from "../../../Cards";

import img1 from "../../../../assets/department1.png";

const DepartmentsSection = () => {
  return (
    <div className="departments-section">
      <h4 className="departments-section-title">სამედიცინო მომსახურება</h4>
      <div className="departments-section-departments">
        <div className="departments-section-departments-item">
          <DepartmentCard
            departmentImg={img1}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>
        <div className="departments-section-departments-item">
          <DepartmentCard
            departmentImg={img1}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>
        <div className="departments-section-departments-item">
          <DepartmentCard
            departmentImg={img1}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>
        <div className="departments-section-departments-item">
          <DepartmentCard
            departmentImg={img1}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>
      </div>
      <Link className="departments-section-link" to={"..."}>
        ყველა
      </Link>
    </div>
  );
};

export default DepartmentsSection;
