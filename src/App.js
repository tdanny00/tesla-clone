import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './app/components/Header';
import Home from './app/components/Home';
import Impact from './app/components/Impact';

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
