import React,{useState} from 'react'

import {ENDPOINT} from '../../apis/enpoint'
export default function Login() {

  const [email, setemail] = useState(null)
  const [password, setpassword] = useState("")

  //register user
  const LoginUser = async() =>{
    
    const login = await fetch(`${ENDPOINT}/login`,{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const res = await login.json()
    if(res.token){
      localStorage.setItem("passkey",res.token)
      window.location.href ="/welcome"
    }

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
                  <legend class="f4 fw6 ph0 mh0">Sign In</legend>
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
                  <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                </fieldset>
                <div class="">
                  <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  onClick={LoginUser}
                  value="Sign in">Login</button>
                </div>
                <div class="lh-copy mt3">
                  <a href="/register" class="f6 link dim black db"> dont have an account Sign up</a>
                  <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                </div>
              </div>
            </main>
          </div>
        </div>
    </div>
  )
}
