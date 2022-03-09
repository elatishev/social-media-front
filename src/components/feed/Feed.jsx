import React, { useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsByUser } from "../../features/fetchingPosts/fetchingPostsSlice";
import SkeletonPosts from "../SkeletonPosts/SkeletonPosts";

export default function Feed({ username }) {
  // const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.registration);
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchingPostsPreparedData = { username, user };
      dispatch(fetchPostsByUser(fetchingPostsPreparedData));
      // setPosts(compareByCreationDate(data));
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
