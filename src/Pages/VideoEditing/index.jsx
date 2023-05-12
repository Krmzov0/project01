import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header';
import ScriptComponent from '../../Components/ScriptComponent'
import { db } from '../../firebase';
import { collection, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import { ArrowRight2 } from 'iconsax-react';
import { Link } from 'react-router-dom'
import { UserAuth } from '../../Context/authContext';

function VideoEditing() {
    const { user } = UserAuth();
    const [scripts, setscripts] = useState([])
    const [fieldValue, setFieldValue] = useState('');

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
        await deleteDoc(doc(db, 'Videoediting', id));

        toast.success('Script Deleted successfuly', {
            style: {
                border: '2px solid #FDCA40',
                padding: '16px',
                color: '#1c1c1c',
            },
            iconTheme: {
                primary: '#FDCA40',
                secondary: '#FFFAEE',
            },
        });
    }

    const moveToUGC = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Videoediting', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToVideoediting = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Videoediting', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToVoiceovers = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Voiceovers', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };



    const handlePersonalScripts = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Pulled to Personal Scripts', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToZishan = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Zishan', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToSakina = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Sakina', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToHussein = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Hussein', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };


    const moveToAlex= async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'alex', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToMeri = async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'Meri', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    const moveToDanyal= async (id) => {
        const sourceDocRef = (doc(db, 'Videoediting', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'danyal', id));

            await setDoc(targetDocRef, sourceDocData);
            await deleteDoc(sourceDocRef);

            toast.success('Script sent successfuly', {
                style: {
                    border: '2px solid #FDCA40',
                    padding: '16px',
                    color: '#1c1c1c',
                },
                iconTheme: {
                    primary: '#FDCA40',
                    secondary: '#FFFAEE',
                },
            });
        } else {
            console.log(`Document ${id} does not exist in the source collection.`);
        }
    };

    return (
        <>

            <Toaster position="top-center" reverseOrder={false} />

            <div className='relative top-0 w-full'>
                <Header />

                <div className='mt-4 sm:mt-0 px-5 sm:px-12 py-6 sm:py-12  flex flex-col'>
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

                                <div className='flex items-center 2xl:gap-x-52 xl:gap-x-[11.2rem]'>
                                    <div className='flex items-center gap-x-7'>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Get</h4>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Send</h4>
                                        {/* <h4 className='text-[#f7f7f7c2] text-md'>Edit</h4> */}
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
                                    <ScriptComponent moveToAlex={moveToAlex} moveToMeri={moveToMeri} moveToDanyal={moveToDanyal} key={index} script={script} fieldValue={fieldValue} setFieldValue={setFieldValue} toggleComplete={toggleComplete} delteScript={deleteScript} handlePersonalScripts={handlePersonalScripts} moveToUGC={moveToUGC} moveToVideoediting={moveToVideoediting} moveToVoiceovers={moveToVoiceovers} moveToZishan={moveToZishan} moveToSakina={moveToSakina} moveToHussein={moveToHussein} />
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