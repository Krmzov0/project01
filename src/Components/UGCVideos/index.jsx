import React, { useState, useEffect } from 'react'
import Header from '../Header/';
import { ArrowRight2 } from 'iconsax-react'
import ScriptComponent from '../ScriptComponent'
import { db } from '../../firebase';
import { collection, onSnapshot, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function UGCVideos() {

    const [scripts, setscripts] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'ugcVideos'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let scriptsArr = []
            querySnapshot.forEach((doc) => {
                scriptsArr.push({ ...doc.data(), id: doc.id })
            });
            setscripts(scriptsArr)
        })
        return () => unsubscribe()
    }, [])

    const toggleComplete = async (script) => {
        await updateDoc(doc(db, 'ugcVideos', script.id), {
            completed: !script.completed
        })
    }

    const deleteScript = async (id) => {
        await deleteDoc(doc(db, 'ugcVideos', id))
    }

    return (
        <div className='relative top-0 w-full'>
            <Header />
            <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-3 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/ugc-videos'>UGC VIDEOS</Link></h4>
                </div>

                <div className='scripList flex flex-col w-full rounded-lg'>

                    <div className='flex pb-10 justify-between items-center'>
                        <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>UGC VIDEOS</h1>
                    </div>

                    <div className='scripList flex flex-col w-full rounded-lg'>

                        <div className='w-full rounded-tl-lg rounded-tr-lg hidden sm:flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
                            <h4 className='text-[#f7f7f7c2] text-md'>Name</h4>

                            <div className='flex items-center gap-x-52'>
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
                            {scripts.map((script, index) => (
                                <ScriptComponent key={index} script={script} toggleComplete={toggleComplete} delteScript={deleteScript} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UGCVideos