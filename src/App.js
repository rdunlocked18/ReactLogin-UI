import React from 'react';
import './App.css';


function App() {
  return (
    <body >
      <title>Srround !</title>
    <div  className="App" >
      <div class="gradbar">
        <img src={require('./images/logo.png')} alt="logo"></img>
      <p className="super-text">  The professional network for those <br/>
      who love music, and everything about it.</p>
        </div>
        <div className="mainContainer">
            <div className="mainCard">
              <p className="cnnct">Connect on Srround!</p>
 
              <p className="desc">Discover, Share and Collaborate with <br/> Professionals from around the world.</p>
      <input type="text" className="loginField" placeholder="Phone, email or username" id="user"></input><br/>
      <input type="text" className="passField" placeholder="Password" id="pass"></input><br/>
      <a href="#" className="fpass" >Forgot Password?</a><br/>
      <button type="submit" value="LOGIN" className="login-btn" onClick="console.log('The link was clicked.');">LOGIN</button><br/>
      <button type="submit" value="SIGNUP" className="singup-btn" >SIGNUP</button>

            </div>
        </div>

    </div>
    </body>
  );


}



export default App;
