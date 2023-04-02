import React from 'react'
import { UserAuth } from '../../Context/authContext'
import Logo from '../../Assets/Images/fav-icon.png'
function Signin() {

    const { googleSignIn } = UserAuth()

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
        <div className='bg-[#121212] h-screen w-screen flex justify-center items-center p-8 sm:p-40'>
            <div className='container mx-auto hidden sm:flex flex-col h-full'>
                <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] flex items-center '>Welcome to <img className='w-10 mx-4' src={Logo} alt="" /> Lead<span className='text-[#FDCA40]'>VIPS</span> </h1>
                <h4 className='text-lg sm:text-xl text-[#dbdbdbca] mt-3'>Sigin in with your Google Account to continue</h4>
                <button className='p-4 border w-max flex text-xl text-[#FDCA40] border-[#FDCA40] rounded-xl mt-8' onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>

            <div className='container mx-auto flex sm:hidden flex-col h-full'>
                <h1 className='text-4xl text-[#dbdbdb] flex flex-col items-start gap-y-2 '>Welcome to <div className='flex items-center'> Lead<span className='text-[#FDCA40]'>VIPS</span></div></h1>
                <h4 className='text-xl text-[#dbdbdbca] mt-5'>Sigin in with your <br /> Google Account to continue</h4>
                <button className='p-4 border w-max flex text-xl text-[#FDCA40] border-[#FDCA40] rounded-xl mt-8' onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
        </div>
    </>
  )
}

export default Signin