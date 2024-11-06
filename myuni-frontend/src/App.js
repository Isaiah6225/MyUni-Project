import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginSignUp from './pages/Login';
import './App.css';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginSignUp/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
