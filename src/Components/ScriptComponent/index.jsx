import React, { useState } from 'react'
import { Edit, TickSquare, Trash, DirectSend, DocumentDownload } from 'iconsax-react'
import './style.css'


function ScriptComponent({ script, delteScript, handleEdit, toggleComplete, moveScript }) {

    const [newTitle, setnewTitle] = useState(script.title)

    const handleChange = (e) => {
        e.preventDefault();
        if (script.completed === true) {
            setnewTitle(script.title);
        } else {
            script.title = "";
            setnewTitle(e.target.value);
        }
    }
    return (
        <>
            <div className='sm:hidden bg-[#f7f7f717] mb-[-12px] p-4 rounded-tr-2xl rounded-tl-2xl'>
                <div className='flex sm:hidden w-full justify-between gap-y-2'>
                    <div className='flex sm:hidden gap-x-5 items-center'>
                        <Edit size="25" color="#DBDBDB" onClick={() => handleEdit(script, newTitle)} />
                        {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#DBDBDB" />}
                        <Trash onClick={() => delteScript(script.id)} className='flex sm:hidden' size="25" color="#DBDBDB" />
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <DocumentDownload size="25" color="#DBDBDB" />
                        <DirectSend size="25" color="#DBDBDB" className='cursor-pointer' onClick={() => moveScript(script.id)} />
                    </div>
                </div>
            </div>

            <div className='hover:bg-[#f7f7f717] select-none w-full scriptComponent relative px-4 pl-4 py-4 rounded-br-2xl rounded-bl-2xl sm:rounded-none border border-[#dbdbdb55] flex items-start justify-between'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex w-full flex-col gap-y-6'>
                        <div className='flex flex-col justify-between items-start'>
                            <input onChange={handleChange} value={script.title === '' ? newTitle : script.title} className={script.completed ? 'text-xl text-[#ffffff7e] line-through transition-all w-full sm:w-[50rem] break-words bg-transparent' : 'w-full sm:w-[50rem] break-words transition-all text-xl text-[#fff] bg-transparent'} />
                            <div className='mt-4 w-[90%] h-[1px] bg-[#dbdbdb55]'></div>
                            <p className='w-[50rem] h-max break-words mt-4 text-lg text-[#fff]'>{script.scriptText}</p>
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
                        <Edit onClick={() => handleEdit(script, newTitle)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
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