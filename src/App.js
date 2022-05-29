import React from 'react';
import './App.css';
import Header from './app/components/Header';
import Home from './app/components/Home';
import Impact from './app/components/Impact';
import Footer from './app/components/Footer';

function App() {
  return (
    <div className="App">
     <Impact/>
     <Header/>
     <Home/>
     </div>
  );
}

export default App;
