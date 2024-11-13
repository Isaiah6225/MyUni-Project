import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginSignUp from './pages/Login';
// import './App.css';
import Home from "./pages/Home"

function App() {
  return(
    <div>
        <Routes>
          {/* <Route index element={<LoginSignUp/>}/>
          <Route path="/login" element={<LoginSignUp/>}/> */}
          <Route path="/" element={true?<Home/>:<LoginSignUp/>}/>
        </Routes>
    </div>
  )
}

export default App;
