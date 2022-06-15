import React,{useState} from 'react'

import {ENDPOINT} from '../../apis/enpoint'
export default function Register() {


  const [email, setemail] = useState(null)
  const [username, setusername] = useState(null)
  const [password, setpassword] = useState(null)

  //register user
  const RegisterUser = async() =>{
    const register = await fetch(`${ENDPOINT}/register`,{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:email,
        username:username,
        password:password
      })
    })
    const res = await register.json()
    console.log(res)
  }
    return (
        <div>
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

          {/* login form */}

          <div>
            <main class="pa4 black-80">
              <div class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                  <legend class="f4 fw6 ph0 mh0">Register</legend>
                  <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="username">Username</label>
                    <input
                    value={username}
                    onChange={e=>setusername(e.target.value)}
                    class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username" id="username" />
                  </div>
                  <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input 
                    value={email}
                    onChange={e=>setemail(e.target.value)}
                    class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                  </div>
                  <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Password</label>
                    <input
                     value={password}
                     onChange={e=>setpassword(e.target.value)}
                    class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                  </div>
                </fieldset>
                <div class="">
                  <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  onClick={RegisterUser}
                  >Sign up</button>
                </div>
                <div class="lh-copy mt3">
                  <a href="/login" class="f6 link dim black db">Already have an account Sign in</a>
                </div>
              </div>
            </main>
          </div>
        </div>
    </div>
    )
}
