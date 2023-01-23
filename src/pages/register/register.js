import React from "react";
import "./register.css";
const Register = () => {
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
              <input placeholder="user name" className="logininput"/>
              <input placeholder="Email" className="logininput"/>
              <input placeholder="passowrd" className="logininput"/>
              <input placeholder="again pasword" className="logininput"/>
              <button className="loginbutton">Sign up</button>
              <button className="registrationbutton">log into Account</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Register;
