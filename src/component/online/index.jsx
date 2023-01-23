import React from './online.css'

const Online = ({user }) => {
  return (
    <div>
           <li className="rightbarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src={user.profilePicture}
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightBarUserName">{user.userName}</span>
          </li>
      
    </div>
  )
}

export default Online
