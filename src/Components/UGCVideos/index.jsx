import React from 'react'
import Header from '../Header/';
import { ArrowRight2, AddSquare } from 'iconsax-react'

function UGCVideos() {
    return (
        <div className='relative top-0 w-full'>
            <Header />
            <div className='px-12 py-12 gap-y-8 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'>DASHBOARD <ArrowRight2 size="19" color="#B4B4B4" /> UGC VIDEOS</h4>
                </div>



                <div className='scripList flex flex-col w-full rounded-lg'>

                    <div className='flex pb-10 justify-between items-center'>
                        <h1 className='text-4xl text-[#dbdbdb] font-normal'>UGC Videos</h1>
                        <button className='w-max px-6 py-3 rounded-lg bg-[#FDCA40] flex justify-center items-center text-lg gap-x-4 font-medium'>Create Script <AddSquare size="24" color="#1c1c1c" /></button>
                    </div>

                    <div className='w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
                        <h4 className='text-[#f7f7f7c2]'>Name</h4>

                        <div className='flex items-center gap-x-20'>
                            <div className='flex items-center gap-x-4'>
                                <h4 className='text-[#f7f7f7c2]'>Edit</h4>
                                <h4 className='text-[#f7f7f7c2]'>Completed</h4>
                                <h4 className='text-[#f7f7f7c2]'>Delete</h4>
                            </div>
                            <div>
                                <h4 className='text-[#f7f7f7c2]'>Created at</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UGCVideos