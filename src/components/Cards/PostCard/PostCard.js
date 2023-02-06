import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.css";

const PostCard = ({ postImage, postText, postDate, postId }) => {
  return (
    <div className="post-card-container">
      <img className="post-card-image" src={postImage} alt="BRCH news card" />
      <div className="post-card-body">
        <p className="post-card-text">{postText}</p>
        <div className="post-card-footer">
          <p className="post-card-footer-date">
            <FaCalendarAlt className="post-card-footer-calendar" /> {postDate}
          </p>
          <Link className="post-card-footer-link" to={`posts/${postId}`}>
            სრულად
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
