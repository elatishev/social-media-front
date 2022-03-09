import React from "react";
import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
import "./SkeletonPosts.css";
// import { Link } from "react-router-dom";
// import { makeRelativePath } from "../../mainConstants";
import { format } from "timeago.js";

const SkeletonCard = () => {
  return (
    <div className="post">
      {/* <Skeleton animation="wave" variant="circular" width={40} height={40} />*/}
      {/* <Skeleton variant="text" />*/}
      {/* <Skeleton variant="circular" width={40} height={40} />*/}
      {/* <Skeleton variant="rectangular" width={210} height={118} />*/}
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Skeleton
                className="postProfileImg"
                animation="wave"
                variant="circular"
                width={32}
                height={32}
              />
              <Skeleton className="postUsername" variant="text" animation="wave" width={60} />
              <Skeleton className="postDate" variant="text" animation="wave" width={60} />
            </div>
          </div>
          <div className="postCenter">
            <Skeleton className="postText" variant="text" width={160} />
            <Skeleton
              className="postImg"
              animation="wave"
              variant="rectangular"
              width={513}
              height={341}
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Skeleton
                className="likeIcon"
                animation="wave"
                variant="circular"
                width={24}
                height={24}
              />
              <Skeleton
                className="likeIcon"
                animation="wave"
                variant="circular"
                width={24}
                height={24}
              />
              <Skeleton className="postLikeCounter" variant="text" width={90} />
            </div>
            <div className="postBottomRight">
              <Skeleton className="postCommentText" variant="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
