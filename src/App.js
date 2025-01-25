import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Light mode by default
  const [alert, setAlert] = useState(null); // Initial alert state is null

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Clear alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'Success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForm heading="Enter the text to Analyse" mode={mode} showAlert={showAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
