import React from "react";
import { PostsSection } from "../Sections/PostsPageSections";
import "./style.css";

const PostsPageLayout = () => {
  return (
    <div className="posts-container">
      <h4 className="posts-container-title">ყველა სიახლე</h4>
      <PostsSection />
    </div>
  );
};

export default PostsPageLayout;
