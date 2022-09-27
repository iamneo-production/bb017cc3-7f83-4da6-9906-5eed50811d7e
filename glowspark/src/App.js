// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom"
import firstPage from './firstpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
            <Route exact path="/" element={<firstPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
