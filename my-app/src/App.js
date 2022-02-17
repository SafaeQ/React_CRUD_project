import React from "react";
// import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUserForm} from './components/EditUserForm';
import { useState} from 'react'
import './App.css';

function App() {
  const usersData = [
    {id: 1, firstName: 'safae', lastName: 'zeaze', username: 'saf'},
    {id: 2, firstName: 'safae2', lastName: 'zeaze', username: 'saf'},
    {id: 3, firstName: 'safae3', lastName: 'zeaze', username: 'saf'}
  ];

  const initialFormState = {id:null, firstName: '', lastName: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const editRow = user=> {
    setEditing(true)
    setCurrentUser({id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username})
  }

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="App">
      <h1> CRUD APP </h1>
      <div className= "flex-row">
    <div className="flex-large">
      {editing ? (
        <div>
            <h2>Edit user</h2>
            <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser}/>
        </div>
      ):(
        <div>
          <h2>Add user</h2>
          <AddUser addUser={addUser}/>
        </div>
      )}
    </div>
    <div className="flex-large">
        <h2>View all users</h2>
        <Home users={users} editRow={editRow} deleteUser={deleteUser} />
    </div>
  </div>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='add-user' element={<AddUser />} />
      </Routes> */}
</div>
  );
}

export default App;
