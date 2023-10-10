import React from 'react'
import "../styles/main.css"
import webPimage from "../assets/webpackLogo.png"
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const App = () => {
  return (
    <div className='main-container'>
      <GoogleOAuthProvider clientId="119568608383-j3sq75u04v7cu4jdmpuh0ltgelhljbve.apps.googleusercontent.com">

        <GoogleLogin
        onSuccess={credentialResponse => {
          const details = jwt_decode(credentialResponse.credential)
          //console.log(details)
          console.log(credentialResponse)
        }}
        onError={()=>{
          console.log('Login Failed')
        }}
        />
      </GoogleOAuthProvider>
      <div className=''>
        <img src={webPimage} alt='webpack' height={250} width={250}/>
      </div>
      <h1 id='main-head'>Webpack app is created</h1>
      <h5 id='sub-head'>Step in and build your web app <span id='speed'>2x</span> faster - auto inject enabled</h5>
    </div>
  )
}

export default App