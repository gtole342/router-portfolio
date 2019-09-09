import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'


function App() {
  return(
    <div className="App">
      <Banner/>
      <Router>
        <div>
          <Nav/>
          <Content />
        </div>
      </Router>
    </div>
  )
}

export default App
