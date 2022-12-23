import React from "react";
import "./post.css"
import { MoreVert } from "@material-ui/icons";
export default function Post () {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfleImg" src="/assects/friend/aliabad.png" alt="sd" />
                        <span className="postUserName">Safakokoglu</span>
                        <span className="postData">5min ago</span>
                    </div>
                    <div className="postTopRight"><MoreVert/></div>
                    </div>
                <div className="postCenter">
                    <span className="postText"> hey this is first app</span>
                    <img className="postImg" src="/assects/friend/aliabad.png" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="/assects/friend/aliabad.png" alt="" />
                    <img className="likeIcon" src="/assects/friend/aliabad.png" alt="" />
                    <span className="likeCounter">32 people liked it</span>
                    
                    </div>
                    <div className="postBottomRight">
                        <span className="postComentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}