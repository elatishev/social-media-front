import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { makeRelativePath } from "../../mainConstants";
import "./share.css";

export default function Share() {
  const { user } = useSelector((state) => state.registration);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSumbit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const uniqueFileName = Date.now() + file.name;
      data.append("name", uniqueFileName);
      data.append("file", file);
      newPost.img = uniqueFileName;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user?.profilePicture || makeRelativePath("/person/noAvatar.png")}
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleSumbit}>
          <label htmlFor="file" className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg, .js"
                onChange={(e) => setFile(e.target.files)}
              />
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </label>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
