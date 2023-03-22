import React, { useState } from 'react'
import Header from '../Header/';
import { ArrowRight2 } from 'iconsax-react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function CreateSript() {
  const [title, setTitle] = useState('')  

  const UGCVideosSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "ugcVideos"), {
        title, 
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
    }
  };

  const VoiceoversSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "Voiceovers"), {
        title, 
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
    }
  };

  const VideoeditingSubmit = async (e) => {
    e.preventDefault();
    
    if (title !== "") {
      await addDoc(collection(db, "Videoediting"), {
        title, 
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
    }
  };

  const AdLaunchSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "adLaunch"), {
        title, 
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
    }
  };

  return (
    <>
      <div className='relative top-0 w-full'>
        <Header />

        <div className='px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-8 flex flex-col'>
          <div className='flex justify-between items-center'>
            <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/create-script'>CREATE SCRIPT</Link></h4>
          </div>

          <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Create Script</h1>
        </div>

        <div className='px-5 sm:px-12 gap-y-8 flex flex-col'>
          <form >
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 xl:w-[24rem] 2xl:w-[28rem] rounded-xl text-lg' type="text" name='script' placeholder='Write your script' />
          </form>

          <div className='flex flex-col w-max gap-y-4'>
            <h3 className='text-xl text-[#dbdbdb]'>Publish to:</h3>
            <div className='gap-3 grid grid-cols-1 grid-rows-4 sm:grid-cols-2'>
              <button onClick={UGCVideosSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>UGC Videos</button>
              <button onClick={VoiceoversSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Voiceovers</button>
              <button onClick={VideoeditingSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Video editing</button>
              <button onClick={AdLaunchSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Ad launch</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CreateSript