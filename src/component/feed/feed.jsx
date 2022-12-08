import React from 'react';
import Share from '../share/share';
import "./feed.css"
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
      </div>
    </div>
  );
}

export default Feed;
