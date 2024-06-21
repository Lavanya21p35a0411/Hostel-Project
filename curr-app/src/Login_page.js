import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./Project/Login_Page.css";
function Login_Page() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "username",
      password: "password"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage=(name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="id1" style={{fontSize:"25px",color:"white",}}>Username</label>
          <input type="text" name="uname" id="id1" style={{fontSize:"20px",color:"black"}} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label for="id2" style={{fontSize:"25px",color:"white"}}>Password </label>
          <input type="password" name="pass" id="id2" style={{fontSize:"20px",color:"black"}} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
<>
{isSubmitted ? <div>
            <App/></div> :
 <div className="app" style={{backgroundColor:"rgb(143, 226, 206)"}} > 
      <h1><b>Student Login</b></h1>
      <div className="login-form" style={{width:"24%",height:"45%"}}>
        <div className="title"><b>Login</b></div>
         {renderForm}
      </div>
    </div>
    }
</>
);
}
export default Login_Page;