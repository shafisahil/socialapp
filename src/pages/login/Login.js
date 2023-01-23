import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">sahil</h3>
                <span className="LoginDesc">helo gays whatsapp</span>
            </div>
            <div className="loginright">
              <div className="loginBox"> 
              <input placeholder="name" className="logininput"/>
              <input placeholder="pasword" className="logininput"/>
              <button className="loginbutton">Login</button>
              <span className="forgetPassword">Forget Password?</span>
              <button className="registrationbutton">Create account</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
