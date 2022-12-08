import { PermMedia } from '@material-ui/icons';
import React from 'react';
import "./share.css"
const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="assects/friend/aliabad.png" alt="" className="shareProfileImg" />
            <input type="text" placeholder='what you want to share' className="shareinput" />
        </div>
        <hr className="shareHr" />
        <div className="shareButton"></div>
        <div className="shareOptions">
            <div className="shareOption">
                <PermMedia className='shareIcon'/>
                <span className='shareoOPtionText'>heloo gays</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
