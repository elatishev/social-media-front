import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { makeRelativePath } from "../../mainConstants";
import "./rightbar.css";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: registeredUser } = useSelector((state) => state.registration);
  const [followed, setFollowed] = useState(null);

  useEffect(() => {
    if (user && user._id) {
      axios.get(`/users/friends/${user._id}`).then(({ data }) => setFriends(data));
      setFollowed(registeredUser.followings.includes(user?._id));
    }
  }, [user, registeredUser.followings]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: registeredUser._id,
        });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: registeredUser._id,
        });
      }
      setFollowed(!followed);
    } catch (err) {
      console.error(err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={makeRelativePath("/gift.png")} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={makeRelativePath("/ad.png")} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== registeredUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 ? "Single" : user.relationship === 1 ? "Married" : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
              key={friend.username}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? makeRelativePath(friend.profilePicture)
                      : makeRelativePath("person/noAvatar.png")
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{user ? <ProfileRightbar /> : <HomeRightbar />}</div>
    </div>
  );
}
