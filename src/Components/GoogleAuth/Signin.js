import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import MainPage from '../MainPage';

function SignIn() {

    const [value, setValue] = useState[''];

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            {value ? <MainPage /> :
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
        </div>
    );
}

export default SignIn