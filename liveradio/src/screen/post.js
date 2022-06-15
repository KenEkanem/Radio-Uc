import React,{useEffect,useState} from 'react'
import { ENDPOINT } from '../apis/enpoint'
import Audioplayer from '../component/audioplayer'
import Comment from '../component/comment'
import homebg from '../files/about-bg.jpg'

 const Post = ({match})=> {

  const [post, setpost] = useState([])

  useEffect(() => {
    GetContent()
  }, [post])

  //GEt the content for a single post
  const GetContent = async () =>{
    const fetchPost = await fetch(`${ENDPOINT}/fetchsinglePost/${match.params.id}`)
    const res = await fetchPost.json()
    if(res.success){
      return setpost(res.success)
    }
  }
 
    return (
        <div>
        {/* image header  */}
        <header class="sans-serif">
          <div class="cover bg-left bg-center-l" style={{ backgroundImage: `url(${homebg})` }}>
            <div class="bg-black-80 pb5 pb6-m pb7-l">
              <nav class="dt w-100 mw8 center">
              </nav>
              <div class="tc-l mt4 mt5-m mt6-l ph3">
                <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">{post.title}</h1>
                <h2 class="fw1 f3 white-80 mt3 mb4">PRESS PLAY!</h2>
              </div>
            </div>
          </div>
        </header>

        {/* post content */}

        <div className="center mw8">
          <p className="f3 lh-copy">
            {post.content}
            </p>
        </div>
        
        {/* has stream */}
        <div className="center mw8">
        {
          post?.hasStream === true &&
          <>
          <span className="live"></span> <Audioplayer src={"http://localhost:8000/example"} title={"live from Radio UC"}/>
          </>

        }  
        </div>

        {/* comments */}
        {
          localStorage.getItem("passkey") &&
          <div className="center w-80 pa2 mb4">
        <Comment postid={match.params.id}/> 
        </div>
        }
        
    </div>
    )
}
export default Post