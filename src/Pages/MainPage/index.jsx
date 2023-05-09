import { TaskSquare } from 'iconsax-react';
import { db } from '../../firebase';
import React, { useEffect, useState } from 'react'
import ScriptComponent from '../../Components/ScriptComponent';
import Header from '../../Components/Header';
import { collection, onSnapshot, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import { UserAuth } from '../../Context/authContext';
import { Tooltip } from 'flowbite-react'

function MainPage() {

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


  const [fieldValue1, setFieldValue1] = useState('');
  const [fieldValue2, setFieldValue2] = useState('');
  const [fieldValue3, setFieldValue3] = useState('');

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchData = async () => {
      // Check if user is authenticated
      if (user) {
        // Get the user-specific collection reference
        const userCollectionRef = collection(db, `personalScripts/${user.uid}/userSpecificScripts`);

        // Set up a snapshot listener to fetch real-time data
        const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFetchedData(data);

        });

        // Return the unsubscribe function to clean up the listener
        return unsubscribe;
      }
    };

    fetchData();
  }, [user]);


  const toggleComplete = async (script) => {
    await updateDoc(doc(db, `personalScripts/${user.uid}/userSpecificScripts`, script.id), {
      completed: !script.completed
    })
  }

  const deleteScript = async (id) => {
    await deleteDoc(doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));

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
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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

  const moveToZishan = async (id) => {
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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


  const handlePersonalScripts = async (id) => {
    const sourceDocRef = (doc(db, `personalScripts/${user.uid}/userSpecificScripts`, id));
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


  /////////////////////////////////////////////////////

  const handleAttachVideoLink = (id) => {
    const clickedDocRef = doc(collection(db, `personalScripts/${user.uid}/userSpecificScripts`), id);
    const updatedDoc = { VideoLink: fieldValue1 };
    setDoc(clickedDocRef, updatedDoc, { merge: true })
      .then(() => {
        console.log(`Link "${fieldValue1}" added to document with ID "${id}"`);
        setFieldValue1('');

        if (fieldValue1 === '') {
          toast.error('Field cannot be empty', {
            style: {
              border: '2px solid red',
              padding: '16px',
              color: '#1c1c1c',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE',
            },
          });
        } else {
          toast.success(`Link attached to script with ID: "${id}"`, {
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

      })
      .catch((error) => {
        console.error(`Error adding link "${fieldValue2}" to document with ID "${id}":`, error);
      });
  };

  const handleAttachUGCVideoLink = (id) => {
    const clickedDocRef = doc(collection(db, `personalScripts/${user.uid}/userSpecificScripts`), id);
    const updatedDoc = { UGCVideoLink: fieldValue2 };
    setDoc(clickedDocRef, updatedDoc, { merge: true })
      .then(() => {
        console.log(`Link "${fieldValue2}" added to document with ID "${id}"`);
        setFieldValue2('');

        if (fieldValue2 === '') {
          toast.error('Field cannot be empty', {
            style: {
              border: '2px solid red',
              padding: '16px',
              color: '#1c1c1c',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE',
            },
          });
        } else {
          toast.success(`Link attached to script with ID: "${id}"`, {
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

      })
      .catch((error) => {
        console.error(`Error adding link "${fieldValue2}" to document with ID "${id}":`, error);
      });
  };

  const handleAttachVoiceoverLink = (id) => {
    const clickedDocRef = doc(collection(db, `personalScripts/${user.uid}/userSpecificScripts`), id);
    const updatedDoc = { VoiceoverLink: fieldValue3 };
    setDoc(clickedDocRef, updatedDoc, { merge: true })
      .then(() => {
        console.log(`Link "${fieldValue3}" added to document with ID "${id}"`);
        setFieldValue3('');

        if (fieldValue3 === '') {
          toast.error('Field cannot be empty', {
            style: {
              border: '2px solid red',
              padding: '16px',
              color: '#1c1c1c',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE',
            },
          });
        } else {
          toast.success(`Link attached to script with ID: "${id}"`, {
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

      })
      .catch((error) => {
        console.error(`Error adding link "${fieldValue3}" to document with ID "${id}":`, error);
      });
  };



  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-5 sm:px-8 py-8'>
          <div className='relative gap-y-4 sm:gap-y-0 flex sm:flex-row flex-col justify-between sm:items-start'>
            <div className='flex flex-col gap-y-5'>
              {user?.displayName ? <h1 className='text-3xl sm:text-4xl font-thin text-[#fff] '>Welcome, {user.displayName}</h1> : <h1 className='text-4xl font-thin text-[#fff]'>Welcome, User</h1>}
              <div className='hidden sm:flex flex-col'>
                <div className='flex flex-col'>
                  <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> <h3>and get work effectiveness </h3> </h3>
                </div>
                <h3 className='text-md sm:text-xl text-[#B4B4B4]'>for all your team members in the company </h3>
              </div>

              <div className='flex sm:hidden flex-col'>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] '>Let's do your best today, <TaskSquare size="23" color="#FDCA40" /> </h3>
                <h3 className='flex items-center gap-x-2 text-lg sm:text-xl text-[#B4B4B4] ' >and get work effectiveness for all <br /> your team members in the company </h3>
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <Tooltip content="Paste the link here and click on the link icon to attach it" style='light'>
                <input className='hover:outline hover:outline-[#fff] transition-all bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] focus-within:outline-none  text-[#fff] p-4 px-3 rounded-xl text-lg hidden sm:flex w-96 mb-6 sm:mb-0 ' type="text" placeholder="Attach Video Link" value={fieldValue1} onChange={(event) => setFieldValue1(event.target.value)} required />
              </Tooltip>

              <Tooltip content="Paste the link here and click on the link icon to attach it" style='light'>
                <input className='hover:outline hover:outline-[#fff] transition-all bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] focus-within:outline-none  text-[#fff] p-4 px-3 rounded-xl text-lg hidden sm:flex w-96 mb-6 sm:mb-0 ' type="text" placeholder="Attach UGC Video Link" value={fieldValue2} onChange={(event) => setFieldValue2(event.target.value)} required />
              </Tooltip>

              <Tooltip content="Paste the link here and click on the link icon to attach it" style='light'>
                <input className='hover:outline hover:outline-[#fff] transition-all bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] focus-within:outline-none  text-[#fff] p-4 px-3 rounded-xl text-lg hidden sm:flex w-96 mb-6 sm:mb-0 ' type="text" placeholder="Attach Voiceover Link" value={fieldValue3} onChange={(event) => setFieldValue3(event.target.value)} required />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className='mx-5 sm:mx-8 mt-[-3rem] flex flex-col h-max rounded-xl'>
          <div>
            <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Your Scripts</h1>

            {fetchedData.length > 0 ? (

              <div className='scripList flex flex-col w-full rounded-lg mt-8'>
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

                  <div className='h-full flex flex-col gap-y-3 sm:gap-y-0 xl:h-[20rem] 2xl:h-[30rem] relative scriptList overflow-hidden overflow-y-scroll '>
                    {fetchedData.map((script, index) => (
                      <ScriptComponent key={index} handleAttachVoiceoverLink={handleAttachVoiceoverLink} handleAttachUGCVideoLink={handleAttachUGCVideoLink} handleAttachVideoLink={handleAttachVideoLink} script={script} fieldValue1={fieldValue1} setFieldValue1={setFieldValue1} fieldValue2={fieldValue2} setFieldValue2={setFieldValue2} fieldValue3={fieldValue3} setFieldValue3={setFieldValue3} toggleComplete={toggleComplete} delteScript={deleteScript} handlePersonalScripts={handlePersonalScripts} moveToUGC={moveToUGC} moveToVideoediting={moveToVideoediting} moveToVoiceovers={moveToVoiceovers} moveToZishan={moveToZishan} moveToSakina={moveToSakina} moveToHussein={moveToHussein} />
                    ))}

                  </div>
                </div>
              </div>// Add a conditional check to ensure data is available
            ) : (
              <p>Your scripts will appear here when you pull them</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage