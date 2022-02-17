import React from 'react'
// import {Link} from 'react-router-dom'
import { useState} from 'react'
// import axios from 'axios'

export const AddUser = (props) => {
    const initialFormState = {id:null, firstName: '', lastName: '', username: ''}
    const [user, setUser] = useState(initialFormState)


    const handleInputChange = (event)=> {
        const {name, value} = event.target
        setUser({...user, [name]: value})
        // console.log(event)
    }
  return (
    //   <main>
    //     <h2>welcome to add user page</h2> 
    //   </main>
    //   <nav>
        // <Link to='/'>Home</Link>
    //   </nav>
      <form onSubmit={e => {
          e.preventDefault();
          if (!user.firstName || !user.lastName || !user.username) return;
            props.AddUser(user)
            setUser(initialFormState)
          
      }}>
                <label>First Name</label>
            <input type="text" name="firstName" value={user.firstName} onchange={handleInputChange} />
                <label>Last Name</label>
            <input type="text" name="lastName" value={user.lastName} onchange={handleInputChange} />
                <label>User Name</label>
            <input type="text" name="userName" value={user.username} onchange={handleInputChange} />

            <button type="submit">Submit </button>
    </form>
  )
}
