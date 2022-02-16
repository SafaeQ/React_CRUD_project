import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'

export const AddUser = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const submitFn = ()=> {
        axios.post('http://localhost:9000/', {firstName: firstName, lastName: lastName})
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
            <input type="text" name="firstName" onchange={(e)=>{setFirstName(e.target.value)}}/>
                <label>Last Name</label>
            <input type="text" name="lastName" onchange={(e)=>{setLastName(e.target.value)}} />
                <label>User Name</label>
            <input type="text" name="userName"/>
                <label>Status</label>
            <input type="text" name="status"/>  
            <br/>

            <button onclick={submitFn} type="submit">Submit </button>
        </div>
    </div>
    </>
  )
}
