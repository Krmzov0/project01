import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header';
import { ArrowRight2 } from 'iconsax-react'
import ScriptComponent from '../../Components/ScriptComponent'
import { db } from '../../firebase';
import { collection, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Tooltip } from 'flowbite-react'
import { UserAuth } from '../../Context/authContext';
// import { auth } from '../../firebase';
// import { useNavigate } from "react-router-dom";

function UGCVideos() {
    //joanne@leadvips.com

    const { user } = UserAuth();

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user && user.email === 'joanne@leadvips.com') {
    //             console.log('fdsafs');
    //         } else {
    //             navigate("/");
    //         }
    //     });

    //     return unsubscribe;
    // }, []);


    const [scripts, setscripts] = useState([])

    const [fieldValue, setFieldValue] = useState('');



    // const handleAttachLink = (id) => {
    //     const clickedDocRef = doc(collection(db, 'Hussein'), id);
    //     const updatedDoc = { Link: fieldValue };
    //     setDoc(clickedDocRef, updatedDoc, { merge: true })
    //         .then(() => {
    //             console.log(`Link "${fieldValue}" added to document with ID "${id}"`);
    //             setFieldValue('');

    //             if (fieldValue === '') {
    //                 toast.error('Field cannot be empty', {
    //                     style: {
    //                         border: '2px solid red',
    //                         padding: '16px',
    //                         color: '#1c1c1c',
    //                     },
    //                     iconTheme: {
    //                         primary: 'red',
    //                         secondary: '#FFFAEE',
    //                     },
    //                 });
    //             } else {
    //                 toast.success(`Link attached to script with ID: "${id}"`, {
    //                     style: {
    //                         border: '2px solid #FDCA40',
    //                         padding: '16px',
    //                         color: '#1c1c1c',
    //                     },
    //                     iconTheme: {
    //                         primary: '#FDCA40',
    //                         secondary: '#FFFAEE',
    //                     },
    //                 });
    //             }

    //         })
    //         .catch((error) => {
    //             console.error(`Error adding link "${fieldValue}" to document with ID "${id}":`, error);
    //         });
    // };


    // const handleEdit = async (script, title, scriptText) => {
    //     await updateDoc(doc(db, 'Hussein', script.id), { title: title });
    //     await updateDoc(doc(db, 'Hussein', script.id), { scriptText: scriptText });
    // }

    useEffect(() => {
        const q = query(collection(db, 'Meri'))
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
        await updateDoc(doc(db, 'Meri', script.id), {
            completed: !script.completed
        })
    }

    const deleteScript = async (id) => {
        await deleteDoc(doc(db, 'Meri', id));

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
        const sourceDocRef = (doc(db, 'Meri', id));
        const sourceDocSnap = await getDoc(sourceDocRef);

        if (sourceDocSnap.exists()) {
            const sourceDocData = sourceDocSnap.data();
            const targetDocRef = (doc(db, 'ugcVideos', id));

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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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
        const sourceDocRef = (doc(db, 'Meri', id));
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

            {/* <div className={modal ? 'z-50 absolute bg-[#00000041] w-screen h-screen flex justify-center items-center' : 'z-50 hidden bg-[#00000041] w-screen h-screen justify-center items-center'}>
                <div className='p-8 flex justify-between items-center'>
                    <input value={newtitle} onChange={handleTitleChange} className='bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 xl:w-[24rem] 2xl:w-[28rem] rounded-xl text-lg' type="text" name='script' />
                    <button onClick={handleTitleUpdate} className='border rounded-xl p-4 text-[#dbdbdb]'>Edit Script</button>
                </div>
            </div> */}

            <div className='relative top-0 w-full'>
                <Header />
                <div className='mt-4 sm:mt-0 px-5 sm:px-12 py-6 sm:py-12  flex flex-col'>
                    <div className='flex flex-col sm:flex-row w-full items-start justify-between '>
                        <div className='gap-y-4 w-full sm:gap-y-8 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/ad-launch/meri'>MERI</Link></h4>
                            </div>

                            <div className='flex pb-10 justify-between items-center'>
                                <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Meri</h1>
                            </div>
                        </div>

                        <input className='hover:outline hover:outline-[#fff] transition-all bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] focus-within:outline-none  text-[#fff] p-4 px-3 rounded-xl text-lg w-full flex sm:hidden mb-6 sm:mb-0 ' type="text" placeholder="Attach Link" value={fieldValue} onChange={(event) => setFieldValue(event.target.value)} required />
                    </div>

                    <div className='scripList flex flex-col w-full rounded-lg'>
                        <div className='scripList flex flex-col w-full rounded-lg'>

                            <div className='w-full rounded-tl-lg rounded-tr-lg hidden sm:flex justify-between items-center px-4 py-4 bg-[#f7f7f717]'>
                                <h4 className='text-[#f7f7f7c2] text-md'>Name</h4>

                                <div className='flex items-center 2xl:gap-x-52 xl:gap-x-[11.2rem]'>
                                    <div className='flex items-center gap-x-7'>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Get</h4>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Send</h4>
                                     

                                        <h4 className='text-[#f7f7f7c2] text-md'>Status</h4>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Delete</h4>

                                    </div>
                                    <div>
                                        <h4 className='text-[#f7f7f7c2] text-md'>Created at</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='h-full flex flex-col gap-y-3 sm:gap-y-0 xl:h-[20rem] 2xl:h-[30rem] relative scriptList overflow-hidden overflow-y-scroll '>
                                {scripts.map((script, index) => (
                                    <ScriptComponent key={index} script={script} fieldValue={fieldValue} setFieldValue={setFieldValue} toggleComplete={toggleComplete} delteScript={deleteScript} handlePersonalScripts={handlePersonalScripts} moveToUGC={moveToUGC} moveToVideoediting={moveToVideoediting} moveToVoiceovers={moveToVoiceovers} moveToZishan={moveToZishan} moveToSakina={moveToSakina} moveToHussein={moveToHussein} moveToAlex={moveToAlex} moveToMeri={moveToMeri} moveToDanyal={moveToDanyal} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UGCVideos