import React from 'react';
import { Posts } from '../../data/postdammyData/postDammyData';
import Post from '../post/post';
import Share from '../share/share';
import "./feed.css"
export default function Feed (){
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>  
        {Posts.map((p)=>(
          <Post key={p.key} post ={p}/>
        ))}
      </div>
    </div>
  );
}


