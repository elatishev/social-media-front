import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { makeRelativePath } from "../../mainConstants";
import { useParams } from "react-router";
import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users?username=${params.username}`);
      setUser(data);
    };
    fetchUser();
  }, [params.username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || makeRelativePath("/post/3.jpeg")}
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture ||
                  makeRelativePath("/person/noAvatar.png")
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
