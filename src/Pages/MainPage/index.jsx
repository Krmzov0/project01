import { TaskSquare } from 'iconsax-react';
import React from 'react'
import { UserAuth } from '../../Context/authContext'
import Header from '../../Components/Header';

function MainPage() {

  const { user } = UserAuth()

  return (
    <>
      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-5 sm:px-8 py-8'>
          <div className='relative gap-y-4 sm:gap-y-0 flex sm:flex-row flex-col justify-between items-stretch sm:items-center'>
            <div className='flex flex-col gap-y-5'>
              {user?.displayName ? <h1 className='text-3xl sm:text-4xl font-thin text-[#fff] '>Welcome, {user.displayName}</h1> : <h1 className='text-4xl font-thin text-[#fff]'>Welcome, User</h1>}
              <div className='hidden sm:flex flex-col'>
                <div className='flex flex-col'>
                  <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> <h3>and get work effectiveness </h3> </h3>
                </div>
                <h3 className='text-md sm:text-xl text-[#B4B4B4]'>for all your team members in the company </h3>
              </div>

              <div className='flex sm:hidden flex-col'>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> </h3>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] ' >and get work effectiveness for all <br /> your team members in the company </h3>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-5 sm:mx-8 mt-8 flex flex-col h-max rounded-xl'>
          <div>
            <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Your Scripts</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage