import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { UserAuth } from '../../Context/authContext'
import { Home, Microphone2, Keyboard, VideoSquare, TrendUp, LogoutCurve, User, Profile2User } from 'iconsax-react'

function SideBar() {

    const { logOut } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='relative left-0 w-96 h-screen bg-[#121212] flex flex-col justify-start border-r border-[#3B3B3B]'>
                <h1 className='text-[#fff] text-3xl px-7 py-8 font-light border-b border-[#3B3B3B]'>WebApp</h1>

                <div className='h-full px-7  relative top-0 flex flex-col justify-between py-12'>
                    <div className='flex flex-col gap-y-7'>
                        <h1 className='text-lg tracking-wide text-[#B4B4B4] mb-3'>MENU</h1>
                        <Link className='text-xl text-[#FDCA40] sideLink relative gap-x-5 flex items-center' to='/'><Home size="32" color="#FDCA40"/> Dashboard</Link>
                        <Link className='text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/copywriting'><Keyboard size="32" color="#dbdbdb"/> Copywriting</Link>
                        <Link className='text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ugc-videos'><VideoSquare size="32" color="#dbdbdb"/> UGC Videos</Link>
                        <Link className='text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/voiceovers'><Microphone2 size="32" color="#dbdbdb"/> Voiceovers</Link>
                        <Link className='text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/video-editing'><VideoSquare size="32" color="#dbdbdb"/> Video editing</Link>
                        <Link className='text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ad-launch'><TrendUp size="32" color="#dbdbdb"/> Ad Launch</Link>
                        <div className='w-10 h-[2px] bg-[#FDCA40] rounded-2xl'></div>
                        <Link className='text-xl text-[#DBDBDB] flex sideLink relative items-center gap-x-5' to='/employees'><Profile2User size="32" color="#dbdbdb" /> Employees</Link>
                    </div>

                    <div className='flex flex-col gap-y-7'>
                        <h1 className='text-lg text-[#B4B4B4] mb-3'>GENERAL</h1>

                        <div className='gap-x-5 flex items-center relative sideLink'><User size="32" color="#dbdbdb" /> <Link className='text-xl text-[#DBDBDB] flex items-center' to='/account'>Account</Link></div>
                        <div className='gap-x-5 flex items-center relative sideLink' onClick={handleSignOut}><LogoutCurve size="32" color="#dbdbdb" /> <Link className='text-xl text-[#DBDBDB] flex items-center'>Logout</Link></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideBar


// #B4B4B4 grey small text
// #DBDBDB white
// #3B3B3B border
// #232323 black