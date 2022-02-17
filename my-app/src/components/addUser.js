import React from 'react'
import { useState} from 'react'

export const AddUser = (props) => {
    const initialFormState = {id:null, firstName: '', lastName: '', userName: '', status:'', createdDate:''}
    const [user, setUser] = useState(initialFormState)

// 
    const handleInputChange = (event)=> {
        console.log(event)
        const {name, value} = event.target
        setUser(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('its work')
        const nameInput = e.target.firstName.value
        console.log(nameInput)
        if (!user.firstName || !user.lastName || !user.userName) return alert('Please enter the inputs');
          props.addUsers(user)
          setUser(initialFormState)
    }
  return (
      <form onSubmit= {handleSubmit}>
                <label>First Name</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
                <label>Last Name</label>
            <input type="text" name="lastName" value= {user.lastName} onChange={handleInputChange} />
                <label>User Name</label>
            <input type="text" name="userName" value= {user.userName} onChange={handleInputChange} />
                <label>Status</label>
            <input type="text" name="status" value={user.status} onChange={handleInputChange} />
                <label>Create Date</label>
            <input type="date" name="createdDate" value={user.createdDate} onChange={handleInputChange} />

            <button type="submit">Submit </button>
    </form>
  )
}
