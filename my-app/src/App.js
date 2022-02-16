import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> CRUD APP </h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='add-user' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
