import React from 'react'
import { Edit, TickSquare, Trash } from 'iconsax-react'
import './style.css'

function ScriptComponent() {
    return (
        <>
            <div className='w-full scriptComponent relative px-4 pl-4 py-4 rounded-2xl sm:rounded-none border border-[#dbdbdb55] flex items-center justify-between'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex w-full flex-col gap-y-6'>
                        <div className='flex justify-between sm:items-center items-start'>
                            <h4 className='text-xl text-[#fff]'>ScriptUSFCA Script 11 Sakina PANDEMIC 2.032. </h4>
                            <div className='flex sm:hidden gap-x-4'>
                                <Edit className='' size="22" color="#DBDBDB" />
                                <TickSquare className='flex sm:hidden' size="22" color="#DBDBDB" />
                            </div>
                        </div>
                        <div className='flex sm:hidden w-full justify-between items-center'>
                            <h3 className='flex sm:hidden text-[#ffffffd2]'>3/18/2023 11:55</h3>
                            <Trash className='flex sm:hidden' size="22" color="#DBDBDB" />
                        </div>
                    </div>


                </div>

                <div className='flex items-center gap-x-0 sm:gap-x-14'>
                    <div className='flex flex-col sm:flex-row items-center gap-x-12'>
                        <Edit className='hidden sm:flex' size="25" color="#DBDBDB" />
                        <TickSquare className='hidden sm:flex' size="25" color="#DBDBDB" />
                        <Trash className='hidden sm:flex' size="25" color="#DBDBDB" />
                    </div>

                    <div>
                        <h3 className='hidden sm:flex text-[#ffffffd2] w-max'>3/18/2023 11:55</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScriptComponent