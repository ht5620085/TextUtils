import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Text from './components/Text'
import Alert from './components/Alert'

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={ alert }/>
      <div className="container">
        <Text showAlert={showAlert} mode={mode} heading=" TextUtils - Word Counter    Character Counter    Remove Extra Spaces"/>
      </div>
    </>
  )
}
