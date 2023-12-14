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


import Check1 from './components/Check1';
import Teams from './components/Teams';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';



function App() {
  
  
  return (
  <div>
 
   <Header/>
   <Router/>

 
   </div>
  );
}

export default App;
