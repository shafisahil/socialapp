import React from 'react';
import Post from '../post/post';
import Share from '../share/share';
import "./feed.css"
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>  
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default Feed;
