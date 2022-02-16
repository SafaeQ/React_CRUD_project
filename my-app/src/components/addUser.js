import React from 'react'
import {Link} from 'react-router-dom'

export const AddUser = () => {
  return (
    <>
      <main>
        <h2>welcome to home page</h2> 
      </main>
      <nav>
        <Link to='/add-user'>Add User</Link>
      </nav>
      <div>
        <h1>Add User</h1>
        <div class= "form">
                <label>First Name</label>
            <input type="text" name="firstName"/>
                <label>Last Name</label>
            <input type="text" name="lastName"/>
                <label>User Name</label>
            <input type="text" name="userName"/>
                <label>Status</label>
            <input type="text" name="status"/>  
            <br/>

            <button type="submit">Submit </button>
        </div>
    </div>
    </>
  )
}
