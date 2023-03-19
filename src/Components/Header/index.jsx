import React, { useState } from 'react'
import { UserAuth } from '../../Context/authContext'
import { Link } from 'react-router-dom'
import { Home, Category, Microphone2, Keyboard, CloseCircle, VideoSquare, TrendUp, LogoutCurve, User, Profile2User } from 'iconsax-react'
import { motion } from 'framer-motion'

function Header() {

  const [menuToggle, setMenuToggle] = useState(false)

  const handleMenuToggle = () => {
    menuToggle ? setMenuToggle(false) : setMenuToggle(true)
  }

  // const [userMenu, setUserMenu] = useState(false)

  // const handleUserMenuToggle = () => {
  //     userMenu ? setUserMenu (false) : setUserMenu(true);
  // }

  const { logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  const { googleSignIn, user } = UserAuth();

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
      <div className=' py-8 px-5 sm:px-12 xl:py-6 2xl:py-9 flex bg-transparent sm:bg-[#121212] justify-end items-center border-0 sm:border-b border-[#3B3B3B] '>
        <div className=' h-full select-none flex w-full justify-between sm:justify-end items-center'>
          <h1 className='sm:hidden flex text-3xl text-[#dbdbdb] '>WebApp</h1>
          <Category onClick={handleMenuToggle} className='sm:hidden flex' size="32" color="#dbdbdb" />
          {user?.displayName ? <h3 className='hidden sm:flex cursor-pointer items-center gap-x-2 text-xl text-[#DBDBDB]' >{user?.displayName}</h3> : <button className='hidden sm:flex text-xl text-[#FDCA40] border-[#3B3B3B] rounded-md' onClick={handleGoogleSignIn}>Sign in with Google</button>}
        </div>
      </div>


      {menuToggle && (<motion.div className='absolute top-0 z-50' initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} ><div className='z-50 sm:hidden absolute top-0 left-0 w-screen h-screen xl:h-full 2xl:h-screen  bg-[#121212] flex flex-col justify-evenly border-r border-[#3B3B3B]'>

        <div className=' py-8 px-5 relative sm:px-12 xl:py-6 sm:py-9 flex bg-transparent sm:bg-[#121212] justify-end items-center '>
          <div className=' h-full select-none flex w-full justify-between sm:justify-end items-center'>
            <h1 className='sm:hidden flex text-3xl text-[#dbdbdb] '>WebApp</h1>
            <button onClick={handleMenuToggle} ><CloseCircle size="35" color="#dbdbdb" /></button>
            {user?.displayName ? <h3 className='hidden sm:flex cursor-pointer items-center gap-x-2 text-xl text-[#DBDBDB]' >{user?.displayName}</h3> : <button className='hidden sm:flex text-xl text-[#FDCA40] border-[#3B3B3B] rounded-md' onClick={handleGoogleSignIn}>Sign in with Google</button>}
          </div>
        </div>

        <div className='py-0 px-5 pb-8 gap-y-14 h-full sm:hidden relative top-0 flex flex-col justify-start xl:gap-y-4 2xl:gap-y-0 xl:py-8 2xl:py-12'>
          <div className='flex flex-col gap-y-7'>
            <h1 className='text-md font-medium tracking-wide text-[#B4B4B4]'>MENU</h1>
            <Link className=' text-2xl text-[#FDCA40] sideLink relative gap-x-5 flex items-center' to='/'><Home className='xl:w-7 2xl:w-max' size="32" color="#FDCA40" /> Dashboard</Link>
            <Link className=' text-2xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/copywriting'><Keyboard className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> Copywriting</Link>
            <Link className=' text-2xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ugc-videos'><VideoSquare className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> UGC Videos</Link>
            <Link className=' text-2xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/voiceovers'><Microphone2 className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> Voiceovers</Link>
            <Link className=' text-2xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/video-editing'><VideoSquare className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> Video editing</Link>
            <Link className=' text-2xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ad-launch'><TrendUp className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> Ad Launch</Link>
            <div className='w-10 h-[2px] bg-[#FDCA40] rounded-2xl'></div>
            <Link className=' text-2xl text-[#DBDBDB] flex sideLink relative items-center gap-x-5' to='/employees'><Profile2User className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> Employees</Link>
          </div>

          <div className='flex flex-col gap-y-7'>
            <h1 className='text-md font-medium tracking-wide text-[#B4B4B4]'>GENERAL</h1>

            {user?.displayName ?
              <div className='gap-y-7 flex flex-col'> 
                <div className='gap-x-5 flex items-center relative sideLink'><User className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> <Link className=' text-2xl text-[#DBDBDB] flex items-center' to='/account'>Account</Link></div>
                <div className='gap-x-5 flex items-center relative sideLink' onClick={handleSignOut}><LogoutCurve className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> <Link className=' text-2xl text-[#DBDBDB] flex items-center'>Logout</Link></div>
              </div> : <button className='p-4 border w-max flex text-xl text-[#FDCA40] border-[#FDCA40] rounded-xl' onClick={handleGoogleSignIn}>Sign in with Google</button>}
          </div>
        </div>

      </div></motion.div>)}
    </>
  )
}

export default Header






// <button  >Logout</button> 