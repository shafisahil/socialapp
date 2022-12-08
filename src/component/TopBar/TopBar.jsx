import React from "react";
import "./topbar.css";
import { Search ,Person,Chat ,Notifications} from "@material-ui/icons";
const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">logosdhjd</span>
      </div>
      <div className="topbarCenter">
        <div className="serachBar">
          <Search  className="searchIcon"/>
          <input
            type="text"
            placeholder="search for friend post or vedio"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarLinks">
          <div className="TopBarLink">Homepage</div>
          <div className="TopBarLink">Timeline</div>
        </div>
        <div className="TopBarIcons">
          <div className="topIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assects/hunza.png" alt="ProfileImage" className="topbarImage" />
      </div>
    </div>
  );
};

export default TopBar;
