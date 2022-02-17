import React from 'react'
// import {Link} from 'react-router-dom'

export const Home = (props)=> (
   <table>
       <thead>
           <tr>
               <th>FirstName</th>
               <th>LastName</th>
               <th>username</th>
           </tr>
       </thead>
       <tbody>
           {props.users.length > 0 ? (
                props.users.map(user=> (
                    <tr key= {user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.username}</td>
                        <td>
                            <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))    
                ): (
                    <tr>
                        <td colSpan= {3}>No users </td>
                    </tr>
                )}
        
       </tbody>
   </table>
)