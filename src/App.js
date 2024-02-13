import React, { useEffect } from'react';
import { useState } from 'react';
import './App.css';

function App() {
const getData = () => {
  const data = localStorage.getItem('course');
  if(data) return JSON.parse(data);
  else return [];
};

  const [language, setLanguage] = useState('');
  const [framework, setFramework] = useState('');
  const [cousrse, setCourse] = useState(getData());

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourse([...cousrse, { language, framework }])
    setLanguage('');
    setFramework('');
  }

  useEffect(() => {
    localStorage.setItem('course',JSON.stringify(cousrse));
}, [cousrse])
return (
  <div className="container">
    <h1>Courses</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="language" className="form-label">Language:</label>
        <input 
          type="text" 
          id="language" 
          className="form-control" 
          placeholder="Enter a language" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="framework" className="form-label">Framework:</label>
        <input 
          type="text" 
          id="framework" 
          className="form-control" 
          placeholder="Enter a framework" 
          value={framework} 
          onChange={(e) => setFramework(e.target.value)} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

}

export default App;
