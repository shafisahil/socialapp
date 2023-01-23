import React from './closeFriend.css'

const CloseFriend = ({userclose}) => {
  return (
    <div>
       <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={userclose.profilePicture}alt="sd" />
                <span className="sidbarFriendName">{userclose.userName}</span>
            </li>
    </div>
  )
}

export default CloseFriend
