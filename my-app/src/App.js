import React from "react";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> CRUD APP </h1>
      <Home/>
      <AddUser/>
    </div>
  );
}

export default App;
