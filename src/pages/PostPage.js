import React from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";

function PostPage() {
  let { id } = useParams();
  console.log(useParams());
  console.log(id);

  return (
    <Layout>
      <div>PostPage - {id} </div>
    </Layout>
  );
}

export default PostPage;
