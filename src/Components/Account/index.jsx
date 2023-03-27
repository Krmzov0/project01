import React from 'react'
import Header from '../Header'
import { UserAuth } from '../../Context/authContext'
import { ArrowRight2, LogoutCurve } from 'iconsax-react'
import { Link } from 'react-router-dom'

function Account() {

    const { user, logOut, googleSignIn } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='relative top-0 w-full'>
                <Header />

                <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-8 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/account'>ACCOUNT</Link></h4>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Account</h1>
                    </div>

                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center gap-x-6'>
                            {user?.photoURL ? <img className='w-24 rounded-full border-2 border-[#dbdbdb] p-1' src={user?.photoURL} alt='' /> : <div className='hidden'></div>}
                            <div className='flex flex-col gap-y-2'>
                                {user?.displayName ? <h1 className='text-3xl text-[#dbdbdb]'>{user.displayName}</h1> : <div className='hidden'></div>}
                                {user?.displayName ? <h3 className='text-xl text-[#B4B4B4]'>{user.email}</h3> : <button className='p-4 border w-max flex text-xl text-[#FDCA40] border-[#FDCA40] rounded-xl' onClick={handleGoogleSignIn}>Sign in with Google</button>}
                            </div>
                        </div>

                        <div>
                            {user?.displayName ? <div className='p-4 px-6 border w-max flex text-xl text-[#FDCA40] rounded-xl gap-x-6' onClick={handleSignOut}><LogoutCurve className='xl:w-7 2xl:w-max' size="32" color="#FDCA40" /> <Link to='/' className=' xl:text-lg 2xl:text-xl text-[#DBDBDB] flex items-center'>Logout</Link></div> : <div className='hidden'></div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Account