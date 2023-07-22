import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/SignIn';
import Dashboard from './components/Dashboard';
import axios from 'axios';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    return () => {
      if(localStorage.getItem("auth-token")!=undefined){
        setIsAuthenticated(true);
      }
    };
  }, []);

  const handleLogin = (username,password) => {
    let formData = {
        username,
        password
    }
    if (username.trim() !== '' && password.trim() !== '') {
      axios.post("http://localhost:8080/authenticate",formData)
      .then((response)=>{
        console.log(response); 
        localStorage.setItem("auth-token",response.data.token);
        setIsAuthenticated(true);
      })
      .catch((error)=>{
        localStorage.removeItem("auth-token");
        console.log(error); 
        alert('Wrong credentials')
      })
    } 
    else {
      alert('Enter valid username and password');
    }
  };

  const handleLogout = function(){
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false);
    
  }

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login handleLogin={handleLogin}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
