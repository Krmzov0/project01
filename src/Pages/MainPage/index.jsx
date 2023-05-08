import { TaskSquare } from 'iconsax-react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../Context/authContext'
import Header from '../../Components/Header';
import ScriptComponent from '../../Components/ScriptComponent';

function MainPage() {

  const { user } = UserAuth()

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


  return (
    <>
      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-5 sm:px-8 py-8'>
          <div className='relative gap-y-4 sm:gap-y-0 flex sm:flex-row flex-col justify-between items-stretch sm:items-center'>
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
          </div>
        </div>

        <div className='mx-5 sm:mx-8 mt-8 flex flex-col h-max rounded-xl'>
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
                        <h4 className='text-[#f7f7f7c2] text-md'>Link</h4>
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
                      <ScriptComponent key={index} script={script} />
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