import React from 'react'
import Header from '../Header/';
import ScriptComponent from '../ScriptComponent';
import { ArrowRight2, Add} from 'iconsax-react'
import { Link } from 'react-router-dom'

function Copywriting() {
    return (
        <div className='relative top-0 w-full'>
            <Header />

            <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-3 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-sm sm:text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/copywriting'>COPYWRITING</Link></h4>
                </div>



                <div className='scripList flex flex-col w-full rounded-lg'>

                    <div className='flex pb-10 justify-between items-center'>
                        <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Copywriting</h1>
                        <Link to='/create-script' className='fixed bottom-6 sm:bottom-0 sm:relative z-40'><button className='mt-4 relative w-max px-[2px] py-[2px] pr-8 rounded-full bg-[#FDCA40]  flex justify-center items-center text-lg gap-x-4 font-medium'><div className='p-4 bg-[#1c1c1c] rounded-full'><Add size="26" color="#fff" /></div> Create Script </button></Link>
                    </div>

                    <div className='w-full rounded-tl-lg rounded-tr-lg hidden sm:flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
                        <h4 className='text-[#f7f7f7c2] text-md'>Name</h4>

                        <div className='flex items-center gap-x-20'>
                            <div className='flex items-center gap-x-4'>
                                <h4 className='text-[#f7f7f7c2] text-md'>Edit</h4>
                                <h4 className='text-[#f7f7f7c2] text-md'>Completed</h4>
                                <h4 className='text-[#f7f7f7c2] text-md'>Delete</h4>
                            </div>
                            <div>
                                <h4 className='text-[#f7f7f7c2] text-md'>Created at</h4>
                            </div>
                        </div>
                    </div>

                    <div className='h-full flex flex-col gap-y-3 sm:gap-y-0 sm:h-[23.3rem] relative scriptList overflow-hidden overflow-y-scroll'>
                        <ScriptComponent />
                        <ScriptComponent />
                        <ScriptComponent />
                        <ScriptComponent />
                        <ScriptComponent />
                        <ScriptComponent />
                        <ScriptComponent />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Copywriting