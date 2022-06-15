import React from 'react'
import Post from '../component/post'
import homebg from '../files/home-bg.jpg'

export default function Welcome() {
    return (
        <div>
        {/* image header  */}
        <header class="sans-serif">
          <div class="cover bg-left bg-center-l" style={{ backgroundImage: `url(${homebg})` }}>
            <div class="bg-black-80 pb5 pb6-m pb7-l">
              <nav class="dt w-100 mw8 center">
              </nav>
              <div class="tc-l mt4 mt5-m mt6-l ph3">
                <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Radio UC</h1>
                <h3 class="fw1 f3 white-80 mt3 mb4">Information in Waves!</h3>
              </div>
            </div>
          </div>
        </header>

        {/* post */}

        <div>
                {/* title */}
                <Post/>
            </div>
        </div>
    )
}
