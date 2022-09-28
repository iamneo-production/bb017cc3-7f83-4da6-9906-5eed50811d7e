<<<<<<< HEAD
=======
<<<<<<< HEAD
//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';

function App() {
  const adminstrator = {
    email:"admin@admin.com",
    password:"admin123"
  }
  const{user, setUser} = useState({name: "", email: ""});
  const[error,setError] = useState("");

  const login = details => {
    console.log("details");
  }
  const logout = details => {
    console.log("logout");
  }

  return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}
<div className="App">
  {(user.email != "") ? (
    <div className="welcome">
      <h2>welcome,<span>{user.name}</span></h2>
      <button>logout</button>
      </div>
  ):(
    <loginForm/>
  )}
</div>
=======
<<<<<<< HEAD
>>>>>>> b7f746be3830a0b04b8e725feffd88aa5b0f68a5
import './App.css';
import React, { useState } from 'react';
import salonHome from './components/SalonHome';
import images from './images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function App() {  
const [hide, sethide] = useState(true);
const [show, setshow] = useState(true);
const validateForm = (event) => {
  event.preventDefault();
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const status = document.querySelector(".status");

  let validation = "Please fill-in the above fields";
  let emailVal = "Email validation error must inclued @ .com TryAgain!";
  let passVal = "Passowrd char must not be less than 8";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
      input1.classList.add("valid");
    }
   }
   if(!input2.value){
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
   }else{
     passwordValidate();
   }
   function passwordValidate() {
     if(input2.value.length < 8){
       console.warn("Passowrd char must not be less than 8");
       status.classList.add("active");
      status.innerHTML = `${passVal}`;
     }else{
      console.log("input2 validated");
      status.classList.remove("active");
      input2.classList.add("valid");
     }
   }
   if(input1.classList.contains("valid") && input2.classList.contains("valid")){
     console.log('submitted');
     setTimeout(() => {
     
      let container = document.querySelector(".container");
      let wrapper = document.querySelector(".wrapper");
      sethide(!hide + wrapper.classList.add("hide"));
      setshow(!show + container.classList.add("show"));

       
     }, 1000);
   }
  }
  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must inclued @ .com TryAgain!";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
    }
   }
  }
  const handlePassword  = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
  
    let validation = "Please fill-in the above fields";
    let passVal = "Passowrd char must not be less than 8";
     if(!input2.value){
        console.warn("validation error");
        status.classList.add("active");
        status.innerHTML = `${validation}`;
     }else{
       passwordValidate();
     }
     function passwordValidate() {
       if(input2.value.length < 8){
         console.warn("Passowrd char must not be less than 8");
         status.classList.add("active");
        status.innerHTML = `${passVal}`;
       }else{
        console.log("input2 validated");
        status.classList.remove("active");
       }
     }
  }
  return (
    <div className="App">
      <salonHome />
      <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={images} alt="" />
          </div>
          <div className="c1">
            <span>Become an member of GlowSark today</span>
          </div>
          <div className="form">
            <div className="status"></div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faUser} />
                <input id='input1' type="text" placeholder='Enter Email Address' onKeyUp={handleMail}/>
              </div>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faLock} />
                <input id='input2' type="password" placeholder='Enter Password' onKeyUp={handlePassword}/>
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 500e5f30db88d4cad53aafe8eb4123b6e9597f9f
  );
}
<<<<<<< HEAD
export default App;
=======

<<<<<<< HEAD
export default App;
=======
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
>>>>>>> 500e5f30db88d4cad53aafe8eb4123b6e9597f9f
>>>>>>> b7f746be3830a0b04b8e725feffd88aa5b0f68a5
