import React from 'react'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom'
import { Link1, ArrowRight2 } from 'iconsax-react';

function AdLaunch() {
    return (
        <div className='relative top-0 w-full'>
            <Header />
            <div className='mt-4 sm:mt-0 px-5 sm:px-12 py-6 sm:py-12  flex flex-col'>
                <div className='flex flex-col gap-y-4 sm:gap-y-8'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/ad-launch'>AD LAUNCH</Link></h4>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Ad Launch</h1>
                    </div>

                    <div className='mt-4 flex-col sm:flex-row flex items-start gap-y-3 sm:gap-y-0 sm:items-center gap-x-4 w-full'>
                        <Link to='/ad-launch/zishan' className='w-full sm:w-max'><div className='hover:border-[#FDCA40] transition-all h-24  flex justify-center items-center p-6 rounded-2xl border border-[#3B3B3B]'>
                            <div className='flex items-center gap-x-3 text-2xl text-[#dbdbdb]'>Zishan <Link1 size="28" color="#FDCA40"/></div>
                        </div></Link>

                        <Link to='/ad-launch/sakina' className='w-full sm:w-max'><div className='hover:border-[#FDCA40] transition-all h-24 flex justify-center items-center p-6 rounded-2xl border border-[#3B3B3B]'>
                            <div className='flex items-center gap-x-3 text-2xl text-[#dbdbdb]'>Sakina <Link1 size="28" color="#FDCA40"/></div>
                        </div></Link>

                        <Link to='/ad-launch/hussein' className='w-full sm:w-max'><div className='hover:border-[#FDCA40] transition-all h-24 flex justify-center items-center p-6 rounded-2xl border border-[#3B3B3B]'>
                            <div className='flex items-center gap-x-3 text-2xl text-[#dbdbdb]'>Hussein <Link1 size="28" color="#FDCA40"/></div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdLaunch