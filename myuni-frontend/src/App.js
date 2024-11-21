
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginSignUp from './pages/Login'; 
import Home from './pages/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication status

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginSignUp setAuth={setIsAuthenticated} />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
