import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Home, Microphone2, Keyboard, VideoSquare, TrendUp, User } from 'iconsax-react'

function SideBar() {

    return (
        <>
            <div className='sm:flex hidden left-0 w-96 xl:h-screen 2xl:h-screen bg-[#121212] flex-col justify-start border-r border-[#3B3B3B]'>
            <Link to='/' ><h1 className='flex text-[#fff] text-3xl px-7 xl:h-24 2xl:h-28 justify-start items-center font-light border-b border-[#3B3B3B] gap-x-1 '>Lead <span className='text-[#FDCA40]'>VIPS</span></h1></Link>

                <div className='px-7 h-full relative top-0 flex flex-col justify-between xl:gap-y-4 2xl:gap-y-0 xl:py-8 2xl:py-12 xl:pb-20 2xl:pb-20'>
                    <div className='flex flex-col gap-y-7'>
                        <h1 className='text-md font-medium tracking-wide text-[#B4B4B4]'>MENU</h1>
                        <Link className=' text-xl text-[#FDCA40] sideLink relative gap-x-5 flex items-center' to='/'><Home className='xl:w-7 2xl:w-max' size="32" color="#FDCA40"/> Dashboard</Link>
                        <Link className=' text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/copywriting'><Keyboard className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb"/> Copywriting</Link>
                        <Link className=' text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/voiceovers'><Microphone2 className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb"/>  Voiceovers</Link>
                        <Link className=' text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ugc-videos '><VideoSquare className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb"/> UGC Videos</Link>
                        <Link className=' text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/video-editing'><VideoSquare className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb"/> Video editing</Link>
                        <Link className=' text-xl text-[#DBDBDB] sideLink relative gap-x-5 flex items-center' to='/ad-launch'><TrendUp className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb"/> Ad Launch</Link>
                        <div className='w-10 h-[2px] bg-[#FDCA40] rounded-2xl'></div>
                    </div>

                    <div className='flex flex-col gap-y-7'>
                        <h1 className='text-md font-medium tracking-wide text-[#B4B4B4]'>GENERAL</h1>

                        <div className='gap-x-5 flex items-center sideLink relative '><User className='xl:w-7 2xl:w-max' size="32" color="#dbdbdb" /> <Link className=' text-xl text-[#DBDBDB] flex items-center' to='/account'>Account</Link></div>
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