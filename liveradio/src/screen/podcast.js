import React from 'react'
import { Podcastfiles } from '../apis/podcast'
import Audioplayer from '../component/audioplayer'


export default function Podcast() {
    return (
        <div>
             {/* image header  */}
        <header class="sans-serif">
          <div class="cover bg-left bg-center-l" style={{ backgroundImage: "url(http://mrmrs.github.io/photos/u/011.jpg)" }}>
            <div class="bg-black-80 pb5 pb6-m pb7-l">
              <nav class="dt w-100 mw8 center">
              </nav>
              <div class="tc-l mt4 mt5-m mt6-l ph3">
                <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Radio UC</h1>
                <h2 class="fw1 f3 white-80 mt3 mb4">Information in waves</h2>
              </div>
            </div>
          </div>
        </header>

        {/* contnt of podcast */}
        <div>
            <div className="bg-white w-80 center pa2">
                {/* player */}
                <div className=" w-50 pa3"> 

                    {
                        Podcastfiles.map((item)=>{
                            return(
                                <div className="db mt4 pa3 bg-light-blue br4">
                                    
                                   <Audioplayer src={item.src} title={item.name}/>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
        </div>
    )
}
