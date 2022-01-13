import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeRelativePath } from "../../mainConstants";

const UserFriends = ({ user }) => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    user._id &&
      axios
        .get(`/users/friends/${user._id}`)
        .then((friends) => setFriendsList(friends.data))
        .catch((err) => console.error(err));
  }, [user._id, user]);

  return (
    <div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        {friendsList &&
          friendsList.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture ||
                    makeRelativePath("/person/noAvatar.png")
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default UserFriends;
