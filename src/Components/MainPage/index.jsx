import React from 'react'
import { UserAuth } from '../../Context/authContext'

function MainPage() {
  const { user } = UserAuth();

  return (
    <>
      <div>MainPage</div>
      {user?.displayName ? <h1>Welcome, {user.displayName}</h1> : <h1>Welcome, User</h1>}
      
    </>
  )
}

export default MainPage