import { useEffect, useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { makeRelativePath} from "../../mainConstants";
import axios from "axios";
import {format} from "timeago.js"
import "./post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const {data} = await axios.get(`users/${post.userId}`)
      setUser(data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || makeRelativePath("/person/noAvatar.png")}
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
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
