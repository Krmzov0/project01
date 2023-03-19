import React from 'react'
import Header from '../Header/';
import ScriptComponent from '../ScriptComponent';
import { ArrowRight2, AddSquare } from 'iconsax-react'
import { Link } from 'react-router-dom'

function Copywriting() {
    return (
        <div className='relative top-0 w-full'>
            <Header />

            <div className='px-12 py-12 gap-y-8 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 size="19" color="#B4B4B4" /> <Link to='/copywriting'>COPYWRITING</Link></h4>
                </div>



                <div className='scripList flex flex-col w-full rounded-lg'>

                    <div className='flex pb-10 justify-between items-center'>
                        <h1 className='text-4xl text-[#dbdbdb] font-normal'>Copywriting</h1>
                        <button className='w-max px-6 py-3 rounded-lg bg-[#FDCA40] flex justify-center items-center text-lg gap-x-4 font-medium'>Create Script <AddSquare size="24" color="#1c1c1c" /></button>
                    </div>

                    <div className='w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
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

                    <div className=' h-[23.3rem] relative scriptList overflow-hidden overflow-y-scroll'>
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