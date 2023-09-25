import logo from './logo.svg';
import './App.css';
// import './Verify.css'

import React from 'react'
import { useState } from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

import './App.css'
// import './'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import VerifyOtpPage from './Verifiyotp';
import Page1 from './getOtp';
import SuccessPage from './success';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/verify" element={<VerifyOtpPage />} />
        <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
