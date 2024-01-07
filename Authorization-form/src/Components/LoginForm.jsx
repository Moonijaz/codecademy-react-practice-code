// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clear, setClear] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('hi');
  };

  const handleLClear = () => {
    // Handle clear logic here
    console.log('bye');
  };

  return (
    <form>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="button" onClick={handleLogin}>
        Login
      </button>
      
      <button type="button" onClick={handleLClear}>
        Clear
      </button>
    </form>
  );
};

export default LoginForm;
