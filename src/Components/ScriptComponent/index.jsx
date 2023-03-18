import React from 'react'
import { Edit, TickSquare, Trash } from 'iconsax-react'
import './style.css'

function ScriptComponent() {
    return (
        <>
            <div className='xl:w-full 2xl:w-[50%] scriptComponent relative rounded-lg px-3 pl-4 py-4 border border-[#dbdbdb55] flex items-center justify-between'>
                <div>
                    <h4 className='text-xl text-[#fff]'>Script name here</h4>
                </div>

                <div className='flex items-center gap-x-5'>
                    <Edit size="25" color="#DBDBDB" />
                    <TickSquare size="25" color="#DBDBDB" className='hover:stroke-[#000]'/>
                    <Trash size="25" color="#DBDBDB"/>
                </div>
            </div>
        </>
    )
}

export default ScriptComponent