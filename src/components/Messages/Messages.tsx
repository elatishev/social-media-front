import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Messages = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        
      </div>
    </>
  );
};

export default Messages;
