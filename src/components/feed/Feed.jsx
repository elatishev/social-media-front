import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/61d9d847c97cb8bdc4691674");

      setPosts(data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts && posts.map((p) => <Post post={p} key={p._id} />)}
      </div>
    </div>
  );
}
