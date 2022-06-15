import React, { useState,useEffect } from 'react'
import {ENDPOINT} from '../apis/enpoint'
import {date_frame} from '../component/date'
import homebg from '../files/home-bg.jpg'
export default function Post() {
    const [AllPost, setAllPost] = useState([])

    useEffect(() => {
        getAllPost()
    }, [AllPost])
    //fetchAll post from database

    const getAllPost = async () => {
        const fetchALLPost = await fetch(`${ENDPOINT}/fetchAllPost`)
        const res = await fetchALLPost.json()
        if (res.success) {
            return setAllPost(res.success)
        }
    }

    return (
        <div className="center w-70 tc">
            

            {/* loop all post */}
            {
                AllPost.length > 0?
                AllPost.map((item)=>{
                    return(
                        <div className="bb b--black-10">
                           <a href={`/post/${item._id}`} className="link">
                                {/* title */}
                            <h1 class="f1 tl black">{item.title}</h1>
                            {/* posted by date */}
                            <div className="db tl">
                                {
                                    item.hasStream === true &&
                                    <div><span className="live"></span> live</div>
                                }
                                <h1 class="f3 lh-copy fw1 gray">posted by  {item.postby} on {date_frame(item.createdAt)}</h1>
                            </div>
                           </a>
                        </div>
                    )
                })
                :
                <p>No post available yet</p>
            }
        </div>
    )
}
