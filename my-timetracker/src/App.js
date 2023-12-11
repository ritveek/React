import './App.css';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Apifetching from './components/Apifetching';
import Table from './components/Table';
import EmployeeList from './components/EmployeeList';


import Tabledata from './components/Tabledata';
import Employeedata from './components/Employeedata';
import AddTask from './components/AddTime';
import * as React from "react";
import Homee from './components/Homee';
import Home from './components/Home';
import Taskdata from './components/Taskdata';



function App() {
  
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Gudd and Daniil
    //     </a>
      //</header>
    //</div>
  <div>
  
   <Header/>
  
    <Home/>

 
   </div>
  );
}

export default App;
