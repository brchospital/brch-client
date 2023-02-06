import React from "react";
import { DepartmentCard } from "../../../Cards";

import "./style.css";

import dprtmimg from "../../../../assets/department1.png";

const MedicalServicesSection = () => {
  return (
    <div className="medical-services">
      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="1"
        />
      </div>
      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="2"
        />
      </div>
      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="sadsd12d"
        />
      </div>
      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="SAD"
        />
      </div>

      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="sads344d12d"
        />
      </div>

      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="55"
        />
      </div>

      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="66"
        />
      </div>

      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="77"
        />
      </div>

      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="12321"
        />
      </div>
      <div className="medical-services-item">
        <DepartmentCard
          departmentImg={dprtmimg}
          departmentTitle="პედიატრია"
          departmentId="dsfdv"
        />
      </div>
    </div>
  );
};

export default MedicalServicesSection;
