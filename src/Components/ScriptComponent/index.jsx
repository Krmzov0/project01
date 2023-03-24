import React from 'react'
import { Edit, TickSquare, Trash, DirectSend, DocumentDownload } from 'iconsax-react'
import './style.css'


function ScriptComponent({ script, delteScript, toggleComplete, modalPopup, moveScript }) {

    return (
        <>
            <div className='sm:hidden bg-[#f7f7f717] mb-[-12px] p-4 rounded-tr-2xl rounded-tl-2xl'>
                <div className='flex sm:hidden w-full justify-between gap-y-2'>
                    <div className='flex sm:hidden gap-x-5 items-center'>
                        <Edit onClick={() => modalPopup} size="25" color="#DBDBDB" />
                        {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#DBDBDB" />}
                        <Trash onClick={() => delteScript(script.id)} className='flex sm:hidden' size="25" color="#DBDBDB" />
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <DocumentDownload size="25" color="#DBDBDB" />
                        <DirectSend size="25" color="#DBDBDB" className='cursor-pointer' onClick={() => moveScript(script.id)} />
                    </div>
                </div>
            </div>
            <div className='select-none w-full scriptComponent relative px-4 pl-4 py-4 rounded-br-2xl rounded-bl-2xl sm:rounded-none border border-[#dbdbdb55] flex items-center justify-between'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex w-full flex-col gap-y-6'>
                        <div className='flex justify-between sm:items-center items-start'>
                            <h4 className={script.completed ? 'text-xl text-[#ffffff7e] line-through transition-all' : 'transition-all text-xl text-[#fff]'}>{script.title}</h4>
                        </div>
                        <h3 className='flex sm:hidden text-[#ffffffd2]'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                    </div>


                </div>

                <div className='flex items-center w-max justify-between'>
                    <div className='flex flex-col sm:flex-row items-center gap-x-10'>
                        <div className='hidden sm:flex gap-x-7'>
                            <DocumentDownload size="25" color="#DBDBDB" />
                            <DirectSend size="25" color="#DBDBDB" className='cursor-pointer' onClick={() => moveScript(script.id)} />
                        </div>
                        <Edit onClick={modalPopup} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
                        {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />}
                        <Trash onClick={() => delteScript(script.id)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
                    </div>

                    <div>
                        <h3 className='w-max sm:w-72 hidden sm:justify-end sm:flex text-[#ffffffd2]'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScriptComponent