import React, { useState } from 'react'
import { TickSquare, Trash, DirectSend, DocumentDownload, Link } from 'iconsax-react'
import './style.css'
import { Tooltip } from 'flowbite-react'
import { motion } from 'framer-motion'

function ScriptComponent({ script, delteScript, handlePersonalScripts, toggleComplete, moveToUGC, moveToVoiceovers, handleAttachLink, moveToVideoediting, fieldValue, setFieldValue }) {

    const [sendMenu, setsendMenu] = useState(false)

    const handleSendMenu = () => {
        sendMenu ? setsendMenu(false) : setsendMenu(true);
    }



    return (
        <>
            <div className='sm:hidden bg-[#f7f7f717] mb-[-12px] p-4 rounded-tr-2xl rounded-tl-2xl'>
                <div className='flex sm:hidden w-full justify-between gap-y-2'>
                    <div className='flex sm:hidden gap-x-5 items-center'>
                        {/* <Edit size="25" color="#DBDBDB" onClick={() => handleEdit(script, newTitle)} /> */}

                        {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer flex sm:hidden' size="25" color="#DBDBDB" />}
                        <Trash onClick={() => delteScript(script.id)} className='flex sm:hidden' size="25" color="#DBDBDB" />
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <Link onClick={() => handleAttachLink(script.id)} size="25" color="#DBDBDB" className='right-[3px] relative cursor-pointer' />
                        <DocumentDownload size="25" color="#DBDBDB" />
                        <DirectSend size="25" color="#DBDBDB" className='cursor-pointer' onClick={handleSendMenu} />
                    </div>
                </div>
            </div>

            <div className='w-full hover:bg-[#f7f7f717] select-none scriptComponent relative px-4 pl-4 py-4 rounded-br-2xl rounded-bl-2xl sm:rounded-none border border-[#dbdbdb55] flex items-start justify-between'>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-full flex flex-col gap-y-6'>
                        <div className='w-full flex flex-col justify-between items-start'>
                            <div className='flex flex-col gap-y-2 w-[90%]'>
                                <h3 className='text-md flex text-[#FDCA40] w-max'>{script.tagValue}</h3>
                                <input value={script.title} readOnly className={script.completed ? 'outline-none cursor-default text-xl text-[#ffffff7e] line-through transition-all break-words bg-transparent w-full border-none' : ' outline-none cursor-default border-none w-full break-words transition-all text-xl text-[#fff] bg-transparent'} />
                            </div>
                            <div className='mt-4 h-[1px] w-[90%] bg-[#dbdbdb55]'></div>
                            {script?.scriptText ? <p className='w-56 xl:w-[30rem] 2xl:w-[50rem] h-max break-words mt-4 text-lg text-[#fff] select-text'>{script.scriptText}</p> : <p className='text-[#ffffffa1] text-lg mt-4'>No script text</p>}
                            <div className='w-10 h-[1px] bg-[#dbdbdb55] mt-4'></div>
                            <div className='flex items-center gap-x-3 w-max mt-4'>
                                <h3 className='text-[#FDCA40]'>Tags: </h3>
                                <h4 className='text-[#ffffffdc]'>{script.tag1}</h4>
                                <h4 className='text-[#ffffffdc]'>{script.tag2}</h4>
                                <h4 className='text-[#ffffffdc]'>{script.tag3}</h4>
                                <h4 className='text-[#ffffffdc]'>{script.tag4}</h4>
                                <h4 className='text-[#ffffffdc]'>{script.tag5}</h4>
                                <h4 className='text-[#ffffffdc]'>{script.tag6}</h4>
                            </div>
                            {script?.Link ? <Tooltip content="Open Link" style='light'><h3 className='flex text-md mt-2 text-[#FDCA40]' ><a href={script.Link} target='blank' >Video Link</a></h3></Tooltip> : <h3 className='hidden'></h3>}
                            {sendMenu && (<motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}><div className='w-max mt-3 relative'>
                                <h4 className='text-[#dbdbdb]'>Send Script to:</h4>
                                <div className='flex flex-col items-start gap-y-2 mt-2'>
                                    <div className='flex items-center gap-x-2'>
                                        <button onClick={() => moveToUGC(script.id)} className='px-2 py-2 w-32 flex justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>UGC Videos</button>
                                        <button onClick={() => moveToVoiceovers(script.id)} className='px-2 py-2 w-32 flex justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>Voiceovers</button>
                                        <button onClick={() => moveToVideoediting(script.id)} className='px-2 py-2 w-32 flex justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>Video editing</button>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <button className='px-2 py-2 flex w-32 justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>Zishan</button>
                                        <button className='px-2 py-2 flex w-32 justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>Sakina</button>
                                        <button className='px-2 py-2 flex w-32 justify-center items-center border-[#FDCA40] border-2 rounded-lg text-[#dbdbdb]'>Hussein</button>
                                    </div>
                                </div>
                            </div> </motion.div>)}
                        </div>
                        <h3 className='flex sm:hidden text-[#ffffffd2]'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                    </div>
                </div>



                <div className='flex items-center w-max justify-between h-full'>
                    <div className='hidden sm:flex flex-col h-full sm:flex-row items-start gap-x-[2.42rem]'>
                        <Tooltip content="Pull to personal scripts" style='light'>
                            <DocumentDownload className='cursor-pointer' onClick={() => handlePersonalScripts(script.id)} aria-disabled size="25" color="#DBDBDB" />
                        </Tooltip>
                        <Tooltip content="Open Send Popup" style={'light'}>
                            <DirectSend size="25" color="#DBDBDB" className='cursor-pointer' onClick={handleSendMenu} />
                        </Tooltip>
                        <Tooltip content="Attach Link" style={'light'}>
                            <Link onClick={() => handleAttachLink(script.id)} size="25" color="#DBDBDB" className='right-[3px] relative cursor-pointer' />
                        </Tooltip>
                        {/* <Edit onClick={() => handleEdit(script, newTitle)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" /> */}
                        <Tooltip content="Complete" style={'light'}>
                            {script.completed ? <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#FDCA40" /> : <TickSquare onClick={() => toggleComplete(script)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />}
                        </Tooltip>
                        
                        <Tooltip content="Delete" style={'light'}>
                            <Trash onClick={() => delteScript(script.id)} className='cursor-pointer hidden sm:flex' size="25" color="#DBDBDB" />
                        </Tooltip>

                        
                    </div>

                    <div className='flex flex-col-reverse justify-between items-end h-full'>
                        <h3 className='text-md hidden sm:flex text-[#ffffff7e] w-max'>Script ID: {script.id}</h3>
                        <h3 className='w-max xl:w-64 2xl:w-72 hidden sm:justify-end sm:flex text-[#ffffffd2]'>{script.createdAt?.toDate().toDateString()} {script.createdAt?.toDate().toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ScriptComponent