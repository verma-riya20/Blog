import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import service from '../appwrite/config'
import { Container,PostForm } from '../Components'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditPosts() {
    const [post, setpost] = useState(null)
    const navigate=useNavigate()
    const {slug}=useParams()

    useEffect(() => {
        service.getposts(slug).then((post)=>{
           if(post){
            setpost(post)
           }
           else{
            navigate('/')
           }
        })
    }, [slug,navigate])
    
  return post? <div className='py-8'>
    <Container>
        <PostForm/>
    </Container>
  </div>:null;
}

export default EditPosts