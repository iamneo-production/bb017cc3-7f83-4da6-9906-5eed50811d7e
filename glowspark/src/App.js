<<<<<<< HEAD
import './App.css';
import React, { useState } from 'react';
// import AirbnbHome from './components/AirbnbHome';
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
      //  window.location.href = 'AirbnbHome';
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
      <div className = "wrapper">
        <div className="content">
          <div className="logo">
            <img src={images} alt=""/>
          </div>
          <div className="c1">
            <span>Become a member of GlowSpark today</span>
          </div>
          <div className="form">
            <div className="status">
                <form action="#" onSubmit={validateForm}>
                  <div className="eInput">
                      <FontAwesomeIcon className="icon" icon={faUser}/>
                      <input type="text" id="input1" placeholder="Enter Email Address" onKeyUp={handleMail}/>
                  </div>
                  <div className="eInput">
                      <FontAwesomeIcon className="icon" icon={faLock}/>
                      <input type="password" id="input2" placeholder="Password" onKeyUp={handlePassword}/>
                  </div>
                  <div className="submit">
                    <button type="submit">
                      Submit</button>  
                  </div> 
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
=======

import React from "react";
import { BrowserRouter, Route, withRouter, Redirect } from "react-router-dom";
import { Routes } from "./constants/routes";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import Account from "./containers/Account/Account";
import Appointment from "./containers/Appointment/Appointment";
//import Auth from "./containers/Auth/Auth";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
import Header from "./components/Header/Header";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Signout from "./components/Signout/Signout";


class App extends React.Component {
  componentDidMount() {
    const { onTryAutoSignup } = this.props;
    onTryAutoSignup();
  }

  renderRoutes = () => {
    const { isAuthenticated } = this.props;

    return isAuthenticated ? (
      <BrowserRouter>
        <Header></Header>
        <main className="container">
          <Route path={Routes.ACCOUNT} component={Account} />
          <Route path={Routes.APPOINTMENT} component={Appointment} />
          <Route path={Routes.MAIN} exact component={Home} />

          <Route path={Routes.SERVICES_FOR_MEN} exact component={Services} />
          <Route
            path={Routes.SERVICES_FOR_MEN_COLOR}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_MEN_HAIRCUTTING}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_MEN_WAXING}
            component={ServiceDetail}
          />

          <Route path={Routes.SERVICES_FOR_WOMEN} exact component={Services} />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_COLOR}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_HAIRCUTTING}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_MAKEUP}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_WAXING}
            component={ServiceDetail}
          />

          <Route path={Routes.SIGNIN} component={Signin} />
          <Route path={Routes.SIGNUP} component={Signup} />
          <Route path={Routes.SIGNOUT} component={Signout} />
          {/* <Route path="/login" component={Auth} /> */}
        </main>
        <Redirect to={Routes.MAIN} />
      </BrowserRouter>
    ) : (
      <BrowserRouter>
        <Header></Header>
        <main className="container">
          <Route path={Routes.MAIN} exact component={Home} />

          <Route path={Routes.SERVICES_FOR_MEN} exact component={Services} />
          <Route
            path={Routes.SERVICES_FOR_MEN_COLOR}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_MEN_HAIRCUTTING}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_MEN_WAXING}
            component={ServiceDetail}
          />

          <Route path={Routes.SERVICES_FOR_WOMEN} exact component={Services} />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_COLOR}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_HAIRCUTTING}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_MAKEUP}
            component={ServiceDetail}
          />
          <Route
            path={Routes.SERVICES_FOR_WOMEN_WAXING}
            component={ServiceDetail}
          />

          {/* <Route path="/login" component={Auth} /> */}
          <Route path={Routes.SIGNIN} component={Signin} />
          <Route path={Routes.SIGNUP} component={Signup} />
        </main>
        <Redirect to={Routes.MAIN} />
      </BrowserRouter>
    );
  };

  render() {
    return <div>{this.renderRoutes()}</div>;
  }
>>>>>>> dd4c796ad0a7dffda579c884eb763113d581d2f8
}

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