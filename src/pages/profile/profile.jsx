import SideBar from "../../component/sideBar/sideBar";
import TopBar from "../../component/TopBar/TopBar";
import Feed from "../../component/feed/feed";
import RightBar from "../../component/rightBar/rightBar";
import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <>
      <div className="App">
        <TopBar />
        <div className="profile">
          <SideBar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
              <img className="profileCoverImg" src="assects/friend/gojal.png" alt="gojal pic" />
              <img className="profileUserImg" src="assects/friend/gojal.png" alt="gojal pic" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">shafi ahmed</h4>
                <span className="profileInfodisc">jdhkdjs</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
