
import React from 'react'
import { Link } from 'react-router-dom';
import service from '../appwrite/config';

function PostCard({
 $id,
 title,
 featuredImage
}) {
    const id=useId();
  return (
   <Link to={`/post/${id}`}>
    <div className="w-full ">
        <div className={service.getFilePreview(featuredImage)}  alt={title}>
            <img></img>
        </div>
        <h2 className='text-xl font-bold'> {title}</h2>
    </div>
   </Link>
  )
}

export default PostCard
