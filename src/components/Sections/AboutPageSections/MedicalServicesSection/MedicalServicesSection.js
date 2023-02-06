import React from "react";
import { DepartmentCard } from "../../../Cards";
import { Link } from "react-router-dom";

import "./style.css";

import dprtimg from "../../../../assets/department1.png";

const MedicalServicesSection = () => {
  return (
    <div className="medical-services-container">
      <h4 className="medical-services-container-title">
        სამედიცინო მომსახურება
      </h4>
      <div className="medical-services-container-services">
        <div className="medical-services-container-services-item">
          <DepartmentCard
            departmentImg={dprtimg}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>

        <div className="medical-services-container-services-item">
          <DepartmentCard
            departmentImg={dprtimg}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>

        <div className="medical-services-container-services-item">
          <DepartmentCard
            departmentImg={dprtimg}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>

        <div className="medical-services-container-services-item">
          <DepartmentCard
            departmentImg={dprtimg}
            departmentTitle="პედიატრია"
            departmentId={1}
          />
        </div>
      </div>
      <Link className="medical-services-container-services-route" to={"..."}>
        ყველა
      </Link>
    </div>
  );
};

export default MedicalServicesSection;
