import React from 'react'
import {Link} from 'react-router-dom'

export const Home = ()=> {
    return (
        <>
        <main>
          <h2>welcome to home page</h2> 
        </main>
        <nav>
          <Link to='/add-user'>Add User</Link>
        </nav>
      </>
    )
}