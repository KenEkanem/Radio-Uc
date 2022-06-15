import { ENDPOINT } from '../apis/enpoint'
import React,{ useState } from 'react'

export default function NewPost() {

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [hasStream, setHasStream] = useState(false)
    

    const SubmitPost = async() =>{
        const formData = new FormData()
        formData.set("title",title)
        formData.set("content",content)
        formData.set("hastream",hasStream)
        

        const createPost = await fetch(`${ENDPOINT}/createPost`,{
            method:'POST',
            headers:{passkey:localStorage.passkey},
            body:formData
        })

        const res = await createPost.json()
        if(res.success){
            settitle("")
            setcontent("")
            return alert(res.success)
        }
        return alert(res.error)
        
    }
  
    return (
        <div className="center mw9 w-80">
            <div className="b f2 lh-title">
                <span>Create new post</span>
            </div>

            <div className="w-80 center">
                {/* title */}
                <h3>Title</h3>
                <div>
                    <input 
                    value={title}
                    onChange={e=>settitle(e.target.value)}
                    type="text" placeholder="Title" className="pa2 w-90"/>
                </div>

                {/* content */}
                <div>
                <h3>Content</h3>
                    <textarea
                    value={content}
                    onChange={e=>setcontent(e.target.value)}
                    type="text" placeholder="Write body of content here" className="pa2 w-90" cols="80" rows="10"/>
                </div>
            </div>
            <div className="tc pa2">
                <label for="stream">
                <input
                onChange={e=>setHasStream(hasStream === true? false:true)}
                value={hasStream}
                type="checkbox" name="stream" className="pa2"/>
                Does this post has Stream
                </label>
            </div>
            <div className="tc pa2 ">
            <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  onClick={SubmitPost}
                  value="Sign in">submit</button>
            </div>
        </div>
    )
}
