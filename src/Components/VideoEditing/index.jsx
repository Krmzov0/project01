import React, { useState, useEffect } from 'react'
import Header from '../Header/';
import { ArrowRight2 } from 'iconsax-react'
import ScriptComponent from '../ScriptComponent'
import { db } from '../../firebase';
import { collection, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function VideoEditing() {

    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState('');

    const modalPopup = () => {
        modal ? setModal(false) : setModal(true)
    }

    const [scripts, setscripts] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'Videoediting'))
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
        await updateDoc(doc(db, 'Videoediting', script.id), {
            completed: !script.completed
        })
    }

    const deleteScript = async (id) => {
        await deleteDoc(doc(db, 'Videoediting', id))
    }

    const editScript = async (script) => {
        const docRef = doc(db, 'Videoediting', script.id);
        await setDoc(docRef, { value: inputValue });
    }

    const moveScript = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'ugcVideos', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            console.log(`Document ${id} has been moved from the source collection to the target collection.`);
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    return (
        <>
            <div className={modal ? 'z-50 absolute bg-[#00000041] w-screen h-screen flex justify-center items-center' : 'z-50 hidden bg-[#00000041] w-screen h-screen justify-center items-center'}>
                <div className='p-8 flex justify-between items-center'>
                    <input value={inputValue} onChange={(event) => console.log(setInputValue(event.target.value))} className='bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 xl:w-[24rem] 2xl:w-[28rem] rounded-xl text-lg' type="text" name='script' />
                    <button onClick={editScript} className='border rounded-xl p-4'>Edit Script</button>
                </div>
            </div>

            <div className='relative top-0 w-full'>
                <Header />
                <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-3 flex flex-col'>
                    
                    <div className='flex flex-col gap-y-4 sm:gap-y-8'>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/video-editing'>VIDEO EDITING</Link></h4>
                        </div>

                        <div className='flex pb-10 justify-between items-center'>
                            <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Video editing</h1>
                        </div>
                    </div>

                    <div className='scripList flex flex-col w-full rounded-lg'>
                        <div className='scripList flex flex-col w-full rounded-lg'>

                            <div className='w-full rounded-tl-lg rounded-tr-lg hidden sm:flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
                                <h4 className='text-[#f7f7f7c2] text-md'>Name</h4>

                                <div className='flex items-center gap-x-52'>
                                    <div className='flex items-center gap-x-6'>
                                        <div className='flex items-center gap-x-6 mr-3'>
                                            <h4 className='text-[#f7f7f7c2] text-md'>Get</h4>
                                            <h4 className='text-[#f7f7f7c2] text-md'>Send</h4>
                                        </div>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Edit</h4>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Status</h4>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Delete</h4>
                                    </div>
                                    <div>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Created at</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='h-full flex flex-col gap-y-3 sm:gap-y-0 sm:h-[23.3rem] relative scriptList overflow-hidden overflow-y-scroll'>
                                {scripts.map((script, index) => (
                                    <ScriptComponent key={index} script={script} modalPopup={modalPopup} toggleComplete={toggleComplete} delteScript={deleteScript} moveScript={moveScript} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VideoEditing