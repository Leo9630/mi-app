import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <h1>Bienvenido a la aplicación 🎉</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
