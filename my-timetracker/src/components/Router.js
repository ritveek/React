import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Teams from './Teams';
import QuizUI from './QuizUI';


const Router = () => {
    return (
   
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/QuizUI" element={<QuizUI />} />
      </Routes>
   
               
        
    );
};

export default Router;