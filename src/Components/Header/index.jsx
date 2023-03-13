import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../Context/authContext'

function Header() {

    const { user, logOut } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='w-full h-max px-24 py-6 flex justify-between items-center'>
                <h1>Logo</h1>

                <div className='flex items-center gap-x-6'>
                    <NavLink to='/'>Homepage</NavLink>
                    <NavLink to='/'>link2</NavLink>
                    <NavLink to='/'>page3</NavLink>

                    <div className='mlz-10'>
                        {user?.displayName ? <button onClick={handleSignOut} >Logout</button> : <NavLink to='/signin'>Sign in</NavLink>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header