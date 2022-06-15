import React,{useState,useEffect} from 'react'
import { ENDPOINT } from '../apis/enpoint'

function Comment({postid}) {
    const [text, settext] = useState("")
    const [AllCOmment, setAllCOmment] = useState([])

    useEffect(() => {
        FetchAllComment()
    }, [AllCOmment])

    //fetchAllComment
    const FetchAllComment = async() =>{
        const fetchAllCom = await fetch(`${ENDPOINT}/Fetchcomment/${postid}`,)
        const res = await fetchAllCom.json()
       
        if(res.success){
            setAllCOmment(res.success)
        }
     }
    //insert comment 
    const commentThisPost = async() =>{
       const insertComment = await fetch(`${ENDPOINT}/comment`,{
           method:'POST',
           headers:{"content-type":"application/json",passkey:localStorage.passkey},
           body:JSON.stringify({
               text:text,
               post_id:postid,
           })
       })
       const res = await insertComment.json()
       if(res.success){
        FetchAllComment()
       }
    }

    return (
        <div >
            <h4 className="lh-title">Comment here</h4>
            <div>
                <textarea 
                onChange={e=>settext(e.target.value)}
                className="pa2" value={text} cols="80" rows="3" placeholder="Write comment here..."/>
                
            </div>
            <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  onClick={commentThisPost}
                  value="submit">submit</button>

                {/* populate all comment */}
                  <div>
                    {
                        AllCOmment.map((item)=>{
                            return(
                                <div className="pa2">
                                <div className="gray f5 pa2">
                                    <span>comment by - {item.commentby}</span>
                                </div>
                                <div className="pa3 ml2 w-50 ">
                                    <span>{item.text}</span>
                                </div>
                            </div>
                            )
                        })
                    }
                  </div>
        </div>
    )
}

export default Comment
