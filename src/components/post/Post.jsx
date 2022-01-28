import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import axios from "axios";
import { makeRelativePath } from "../../mainConstants";
import "./post.css";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(post.likes.length);
  const location = useLocation();
  const { user: currentUser } = useSelector((state) => state.registration);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users?userId=${post.userId}`);
      setUser(data);
    };
    fetchUser();

    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.userId, post.likes, currentUser]);

  const likeHandler = () => {
    try {
      axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.error(error);
    }

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const itselfRefGuardian = () => {
    return location.pathname.includes(user.username) ? "" : `profile/${user.username}`;
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={itselfRefGuardian()}>
              <img
                className="postProfileImg"
                src={user.profilePicture || makeRelativePath("/person/noAvatar.png")}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={makeRelativePath("/like.png")}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={makeRelativePath("/heart.png")}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
