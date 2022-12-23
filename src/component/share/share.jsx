import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
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
                <PermMedia htmlColor='tomato' className='shareIcon'/>
                <span className='shareoOPtionText'>photoo and video</span>
            </div>
            <div className="shareOption">
                <Label  htmlColor='blue' className='shareIcon'/>
                <span className='shareoOPtionText'>Tag</span>
            </div>
            <div className="shareOption">
                < Room htmlColor='green' className='shareIcon'/>
                <span className='shareoOPtionText'>Location</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                <span className='shareoOPtionText'>Feeling</span>
            </div>
        <button  className='shareButtons'>Share Button</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
