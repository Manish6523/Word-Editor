import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Textinput from './components/Textinput';
import AlertComponent from './components/AlertComponent';


      document.body.style.backgroundColor = '#b3b3b3'
function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Darkmode')
  const [alert, setAlert] = useState(null)
  
  const alm = (message,type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  function toggleModes(){
    if (mode==='light') {
      setMode('dark')
      setModeText('Darkmode')
      document.body.style.backgroundColor = '#151515'
      alm('DarkMode has been Enabled','success')
    } else {
      setMode('light')
      setModeText('Lightmode')
      document.body.style.backgroundColor = '#b3b3b3'
      alm('LightMode has been Enabled','success')
    }
  }
  return (
    <>
    <NavBar mode={mode} modeText={modeText} snpm toggleModes={toggleModes}/>
    <AlertComponent alert={alert} />
    <Textinput alm={alm} mode={mode} />
    </>
  );
}

export default App;
