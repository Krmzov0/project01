import React, { useEffect } from 'react'
import { UserAuth } from '../../Context/authContext'
import { useNavigate } from 'react-router-dom';

function Signin() {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
    if (user != null) {
      navigate('/');  
    }
  });

  return (
    <>
      <div>Signin</div>
      <button onClick={handleGoogleSignIn} className='px-12 py-4 rounded-xl border'>Sign in with Google</button>
    </>

  )
}

export default Signin