import React, { useState } from "react";
import "./post.css"
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../data/userDammyData/dummyData";
export default function Post({post}) {
    const [like , setLike] =useState(post.like)
    const [islike , setIslike] =useState(false)
    const handleLike =()=>{
        setLike(islike ? like-1 :like +1)
        setIslike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfleImg" src={Users.filter((item)=>item.id=== post?.userId)[0].profilePicture} alt="sd" />
                        <span className="postUserName">{Users.filter((item)=>item.id=== post?.userId)[0].userName}</span>
                        <span className="postData">{post.date}</span>
                    </div>
                    <div className="postTopRight"><MoreVert/></div>
                    </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="/assects/friend/aliabad.png" onClick={handleLike} alt="" />
                    <img className="likeIcon" src="/assects/friend/aliabad.png" onClick={handleLike} alt="" />
                    <span className="likeCounter">{like} people liked it</span>
                    
                    </div>
                    <div className="postBottomRight">
                        <span className="postComentText">{post.commit} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}