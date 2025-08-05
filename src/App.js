import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const AuthGate= () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/auth/me", {
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setUser(data.user);
        setLoading(false);
        navigate("/home");
      })
     .catch(() => {
        setUser(null);
        setLoading(false);
        navigate("/login");
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return null; // this component just redirects
};

function App() {
   

  return (

  <div>
    
       <Router>
      <Routes>
        <Route path="/" element={<AuthGate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    
    </div>
  );
}



const AuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/auth/me", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not Authenticated");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="auth-status">
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default App;
