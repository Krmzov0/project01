import { AddSquare, TaskSquare } from 'iconsax-react';
import React from 'react'
import { UserAuth } from '../../Context/authContext'
import Header from '../Header/';


function MainPage() {
  const { user } = UserAuth();

  return (
    <>
      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-12 py-12 hidden'>
          <div className='relative flex justify-between items-center'>
            <div className='flex flex-col gap-y-5'>
              {user?.displayName ? <h1 className='text-4xl font-thin text-[#fff] '>Welcome, {user.displayName}</h1> : <h1 className='text-4xl font-thin text-[#fff]'>Welcome, User</h1>}
              <h3 className='text-xl text-[#B4B4B4] '>Let's do your best today, and get work effectiveness <br /> <h3 className='flex items-center gap-x-3'> for all your team members in the company <TaskSquare size="23" color="#FDCA40" /></h3></h3>
            </div>

            <div>
              <button className='w-max px-6 py-3 rounded-lg bg-[#FDCA40] flex justify-center items-center text-lg gap-x-4 font-medium'>Create Script <AddSquare size="24" color="#1c1c1c" /></button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default MainPage