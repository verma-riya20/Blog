
import React from 'react'
import {Link} from 'react-router-dom'
import appwriteService from '../appwrite/config '

function PostCard({
 $id,
 title,
 featuredImage
}) {
    const id=useId();
  return (
   <link to={`/post/${id}`}>
    <div className="w-full ">
        <div className={appwriteService.getFilePreview(featuredImage)}  alt={title}>
            <img></img>
        </div>
        <h2 className='text-xl font-bold'> {title}</h2>
    </div>
   </link>
  )
}

export default PostCard
