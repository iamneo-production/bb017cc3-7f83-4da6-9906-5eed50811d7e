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
  );
}
export default App;
