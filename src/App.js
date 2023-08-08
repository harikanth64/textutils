import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { ReactDOM } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, fade)=> {
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
      <Navbar title="TextUtils" aboutTitle="About"/>
      <Alerts alertMessage={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} textTitle="Enter the text to analyze below"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
