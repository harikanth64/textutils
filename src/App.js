import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, fade) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({
        show: fade
      })
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutTitle="About" />
        <Alerts alertMessage={alert} />
        <div className="container my-3">
        {/* Replace Switch with Routes for react-router-dom v6  */}
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} textTitle="Enter the text to analyze below" />} />
            <Route exact path="/about" element={<About/>} /> 
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
