import React, { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { useSelector } from "react-redux";
import { compareByCreationDate } from "../../helpers";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.registration);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`);

      setPosts(compareByCreationDate(data));
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts && posts.map((p) => <Post post={p} key={p._id} />)}
      </div>
    </div>
  );
}
