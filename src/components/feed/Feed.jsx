import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "/posts/timeline/61d46d1652dda3c1a9d2cea6"
      );

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts && posts.map((p) => <Post post={p} key={p._id} />)}
      </div>
    </div>
  );
}
