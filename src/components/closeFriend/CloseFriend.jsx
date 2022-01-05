import { makeRelativePath } from "../../mainConstants";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={makeRelativePath(user.profilePicture)} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
