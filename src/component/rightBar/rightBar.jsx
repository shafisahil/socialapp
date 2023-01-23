import "./rightBar.css";
import { Users } from "../../data/userDammyData/dummyData";
import Online from "../online";
const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImgContainer" src="gift.jpg" alt="" />
          <span className="birthdayText">
            <b>nadeem</b> and <b>three other friend have</b> birthday
          </span>
        </div>
        <img src="assects/friend/gojal.png" alt="" className="rightbarAdd" />
        <h4 className="rightbarTitle">online friend</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">user information</h4>
        <div className="rightbarinfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">city:</span>
            <span className="rightbarInfoValue">New york</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">from:</span>
            <span className="rightbarInfoValue">marian</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">user friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="assects/friend/gojal.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingName">john helo </span>
          </div>
          <div className="rightbarfollowing">
            <img src="assects/friend/gojal.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingName">john helo </span>
          </div>
          <div className="rightbarfollowing">
            <img src="assects/friend/gojal.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingName">john helo </span>
          </div>
          <div className="rightbarfollowing">
            <img src="assects/friend/gojal.png" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingName">john helo </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
       {profile ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  );
};

export default RightBar;
