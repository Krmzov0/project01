import React from 'react'
import Header from '../Header/';
import { ArrowRight2 } from 'iconsax-react'
import { Link } from 'react-router-dom'

function CreateSript() {
  return (
    <>
        <div className='relative top-0 w-full'>
            <Header />

            <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-3 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-sm sm:text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/create-script'>CREATE SCRIPT</Link></h4>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default CreateSript