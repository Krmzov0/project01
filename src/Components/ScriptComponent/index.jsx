import React from 'react'
import { Edit, TickSquare, Trash } from 'iconsax-react'
import './style.css'


function ScriptComponent({ script, delteScript, toggleComplete }) {

    return (
        <>
            <div className='select-none w-full scriptComponent relative px-4 pl-4 py-4 rounded-2xl sm:rounded-none border border-[#dbdbdb55] flex items-center justify-between'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex w-full flex-col gap-y-6'>
                        <div className='flex justify-between sm:items-center items-start'>
                            <h4 className={script.completed ? 'text-xl text-[#ffffff7e] line-through transition-all' : 'transition-all text-xl text-[#fff]'}>{script.title}</h4>
                            <div className='flex sm:hidden gap-x-4'>
                                <Edit className='' size="22" color="#DBDBDB" />
                                {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="22" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="22" color="#DBDBDB" />}
                            </div>
                        </div>
                        <div className='flex sm:hidden w-full justify-between items-center'>
                            <h3 className='flex sm:hidden text-[#ffffffd2]'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                            <Trash onClick={() => delteScript(script.id)} className='flex sm:hidden' size="22" color="#DBDBDB" />
                        </div>
                    </div>


                </div>

                <div className='flex items-center gap-x-0 sm:gap-x-[4.5rem]'>
                    <div className='flex flex-col sm:flex-row items-center gap-x-12'>
                        <Edit className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
                        {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />}
                        <Trash onClick={() => delteScript(script.id)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
                    </div>

                    <div>
                        <h3 className='hidden sm:flex text-[#ffffffd2] w-max'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScriptComponent