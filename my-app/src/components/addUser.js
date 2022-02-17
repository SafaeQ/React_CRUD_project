import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useRef} from 'react'
// import axios from 'axios'

export const AddUser = () => {
    const [firstName, setFirstName] = useState([])
    // const [lastName, setLastName] = useState("")
    const firstNameRef = useRef()

    const handleOnSubmit = (e)=> {
        console.log(e)
        // axios.post('http://localhost:9000/', {firstName: firstName, lastName: lastName})
    }
  return (
    <>
      <main>
        <h2>welcome to add user page</h2> 
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <div>
        <div class= "form">
            <br/>
                <label>First Name</label>
            <input type="text" name="firstName" ref = {firstNameRef}/>
                <label>Last Name</label>
            <input type="text" name="lastName"  />
                <label>User Name</label>
            <input type="text" name="userName"/>
                <label>Status</label>
            <input type="text" name="status"/>  
            <br/>

            <button onclick={handleOnSubmit} type="submit">Submit </button>
        </div>
    </div>
    </>
  )
}
