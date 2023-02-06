import React from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";

function DepartmentPage() {
  let { id } = useParams();

  return (
    <Layout>
      <div>DepartmentPage id {id}</div>
    </Layout>
  );
}

export default DepartmentPage;
