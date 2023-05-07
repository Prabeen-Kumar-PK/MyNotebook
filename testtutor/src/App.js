
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";

function App() {

// for alerts using useState
const [alerts, setAlerts] = useState();


const showAlert =(messages, type)=>{
  setAlerts({
    msg:messages,
    type:type
  })

  // for setting flash out the alert widow after 3 seconds.
  setTimeout(() => {
    setAlerts(null)
  }, 2000);
}


  // for mode using usestate
  const [mode, setMode] = useState('light');

  //for text color using usestate
  const [color, setColor] = useState("dark"); 

  // for button color using usestate
  const [buttonColor, setButtonColor] = useState("primary");

  

  // function  for changing dark to light and light to dark  mode
  const toggleMode=()=>{
  if(mode ==="light"){
    setMode("dark");
    setColor("light");
    document.body.style.backgroundColor= "#03001C"
    document.body.style.color="#FFF"
    showAlert("Dark mode enabled","info")
    document.title='Text-tutor - Dark mode'
    setButtonColor("secondary")
   

  }else{
    setMode("light");
    setColor("dark");
    document.body.style.backgroundColor= "#FAF7F0"
    document.body.style.color="#03001C"
    showAlert("Light mode enabled","info")
    document.title='Text-tutor - Light mode'
    setButtonColor("primary")
  }
  }

  
  


  return (
    <>
    <Router>
       <Navbar title="Text-Tutor" mode={mode} toggleMode={toggleMode} tc={color}/>
        <Alert alert={alerts}/>
       <div className="container">
       <Routes>
          <Route exact path="/about" element={ <About mode={mode} />}/>
           
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode}  tc={color} buttonColor={buttonColor}  showAlert= {showAlert} labelName="Enter Your Text:"/>}/>
          
        </Routes>
       </div>
       </Router>
       {/* <TextForm/> */}
    </>
  );
}

export default App;
