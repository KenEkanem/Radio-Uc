
import React,{useEffect,useState} from 'react'
import { ENDPOINT } from '../apis/enpoint'

export default function Header() {

  const [login, setlogin] = useState(false)
   

    useEffect(() => {
      checkPasskey()
    }, [])

     // verify user passkey and keep login and register off grid
    const checkPasskey = async()=>{
      const checkKey = await fetch(`${ENDPOINT}/verifyKey`,{
        headers:{passkey:localStorage.passkey}
      })
      const res = await checkKey.json()
     
      if(res.message === true){
        return setlogin(true)
      }
    }

    const logout = () =>{
      localStorage.removeItem("passkey")
      window.location.href = "/login"
    }
    return (
        <header class="sans-serif">
  <div class="bg-black">
      <nav class="dt w-100 mw8 center"> 
        <div class="dtc w2 v-mid pa3">
          <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            <svg class="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{fill:"currentcolor"}}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
          </a>
        </div>
        <div class="dtc v-mid tr pa3">
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 ttc" href="/welcome" >Home</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 ttc" href="/podcast" >podcast</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 ttc" href="/createPost" >new post</a> 
          {
            login === false &&
                <>
                <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 ttc" href="/login" >login</a> 
                <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 ttc" href="/register" >register</a> 
                </>
            
          }
          
          {
            login === true &&
            <button class="f6 fw4 hover-white no-underline bg-black white-70 dib ml2 pv2 ph3 ba ttc pointer" onClick={logout} >logout</button> 
          }
          
        </div>
      </nav> 
    </div>
</header>

    )
}
