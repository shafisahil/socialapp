import React from "react";
import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  VideoLibrary,
  Group,
  Bookmark,
  Help,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidBarWrapper">
        <ul className="sideBarList">
          <li className="sidebarListItems">
            <RssFeed /> <span className="sideBarListItemText">feed</span>
          </li>
          <li className="sidebarListItems">
            <Chat /> <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sidebarListItems">
            <VideoLibrary /> <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sidebarListItems">
            <Group /> <span className="sideBarListItemText">Group</span>
          </li>
          <li className="sidebarListItems">
            <Bookmark /> <span className="sideBarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItems">
            <Help /> <span className="sideBarListItemText">Question</span>
          </li>
          <li className="sidebarListItems">
            <WorkOutline /> <span className="sideBarListItemText">Job</span>
          </li>
          <li className="sidebarListItems">
            <Event /> <span className="sideBarListItemText">Event</span>
          </li>
          <li className="sidebarListItems">
            <School /> <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="SidebarHr"/>
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="assects/friend/aliabad.png" alt="sd" />
                <span className="sidbarFriendName">nasir</span>
            </li>
            
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
