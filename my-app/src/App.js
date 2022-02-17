import React from "react";
// import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUserForm} from './components/EditUserForm';
import { useState} from 'react'
import './App.css';

function App() {
  let usersData= [{
    id: "1",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
},

{
    id: "2",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
},

{
    id: "3",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
}] 

  const initialFormState = {id:null, firstName: '', lastName: '', username: '', status: ''}
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
