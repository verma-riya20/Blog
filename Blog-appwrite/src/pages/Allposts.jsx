import React from 'react'
import { Container,PostCard } from '../Components'
import service from '../appwrite/config'

function Allposts() {
    const [posts, setposts] = useState()
    useEffect(() => {
      
    }, [])
    service.getposts([]).then((posts)=>{
       if(posts){
        setposts(posts.documents)
       }
    })
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts.map((posts)=>(
                    <div key={posts.$id}>
                        <PostCard post={post}/>
                    </div>
                )

                )}
            </div>
        </Container>
    </div>
  )
}

export default Allposts