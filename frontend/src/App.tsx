import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('My message blah blash');

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message);
      });

  }, []);
  return (
    <div className="App">
      {message}
    </div>
  );
}


export default App;
