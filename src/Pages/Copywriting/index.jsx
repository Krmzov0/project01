import React from 'react'
import Header from '../../Components/Header';
import { ArrowRight2, Add } from 'iconsax-react'
import { Link } from 'react-router-dom'

function Copywriting() {

    return (
        <div className='relative top-0 w-full'>
            <Header />

            <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-3 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/copywriting'>COPYWRITING</Link></h4>
                </div>

                <div className='flex pb-10 justify-between items-center'>
                    <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Copywriting</h1>
                    <Link to='/create-script' className='fixed bottom-6 sm:bottom-0 sm:relative z-40'><button className='mt-4 relative w-max px-[2px] py-[2px] pr-8 rounded-full bg-[#FDCA40]  flex justify-center items-center text-lg gap-x-4 font-medium'><div className='p-4 bg-[#1c1c1c] rounded-full'><Add size="26" color="#fff" /></div> Create Script </button></Link>
                </div>

            </div>
        </div>
    )
}

export default Copywriting