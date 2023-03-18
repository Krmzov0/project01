import React from 'react'
import Header from '../Header/';
import ScriptComponent from '../ScriptComponent';
import { ArrowRight2 } from 'iconsax-react'

function Copywriting() {
    return (
        <div className='relative top-0 w-full'>
            <Header />

            <div className='px-12 py-12 gap-y-8 flex flex-col'>
                <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'>DASHBOARD <ArrowRight2 size="19" color="#B4B4B4"/> COPYWRITING</h4>
                <h1 className='text-4xl text-[#dbdbdb] font-light'>Copywriting</h1>

                <div className='scripList gap-y-2 flex flex-col '>
                    <ScriptComponent />
                    <ScriptComponent />
                    <ScriptComponent />
                    <ScriptComponent />
                </div>
            </div>
        </div>
    )
}

export default Copywriting