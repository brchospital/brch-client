import React from "react";
import { Link } from "react-router-dom";
import { PostCard } from "../../../Cards";

import "./style.css";

import tst from "../../../../assets/news2.png";

const PostsSection = () => {
  return (
    <div className="posts-container">
      <div className="posts-container-navigation">
        <h4 className="posts-container-navigation-title">სიახლეები</h4>
        <Link className="posts-container-navigation-link" to={"posts"}>
          ყველა სიახლე
        </Link>
      </div>
      <div className="posts-container-posts">
        <div className="posts-container-posts-item">
          <PostCard
            postImage={tst}
            postText={"საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია."}
            postDate={"10.10.23"}
            postId={"12321321312321"}
          />
        </div>

        <div className="posts-container-posts-item">
          <PostCard
            postImage={tst}
            postText={"საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია."}
            postDate={"10.10.23"}
            postId={"3423"}
          />
        </div>

        <div className="posts-container-posts-item">
          <PostCard
            postImage={tst}
            postText={"საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია."}
            postDate={"10.10.23"}
            postId={"asdsadsdas142412421"}
          />
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
