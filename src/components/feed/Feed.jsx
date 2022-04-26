import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsByUser } from "../../features/fetchingPosts/fetchingPostsSlice";
import { selectIsUserRegistered } from "../../selectors";
import Share from "../share/Share";
import Post from "../post/Post";
import SkeletonPosts from "../SkeletonPosts/SkeletonPosts";
import "./feed.css";

export default function Feed({ username }) {
  const { user } = useSelector(selectIsUserRegistered);
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchingPostsPreparedData = { username, user };
      dispatch(fetchPostsByUser(fetchingPostsPreparedData));
    };
    fetchPosts();
  }, [username, user._id, user, dispatch]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {loading && <SkeletonPosts />}
        {loading && <SkeletonPosts />}
        {loading && <SkeletonPosts />}
        {posts ? posts.map((p) => <Post post={p} key={p._id} />) : <SkeletonPosts />}
      </div>
    </div>
  );
}
