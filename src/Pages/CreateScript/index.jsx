import React, { useState } from 'react'
import Header from '../../Components/Header';
import { ArrowRight2 } from 'iconsax-react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

function CreateSript() {

  const [title, setTitle] = useState('')
  const [scriptText, setscriptText] = useState('')
  const [tag1, settag1] = useState('')
  const [tag2, settag2] = useState('')
  const [tag3, settag3] = useState('')
  const [tag4, settag4] = useState('')
  const [tag5, settag5] = useState('')
  const [tag6, settag6] = useState('')

  const UGCVideosSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "ugcVideos"), {
        title,
        scriptText,
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
        tag6,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("")
      setscriptText("")
      toast.success('Script created successfuly', {
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
    }
  };

  const VoiceoversSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "Voiceovers"), {
        title,
        scriptText,
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
        tag6,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      toast.success('Script created successfuly', {
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
    }
  };

  const VideoeditingSubmit = async (e) => {
    e.preventDefault();

    if (title !== "") {
      await addDoc(collection(db, "Videoediting"), {
        title,
        scriptText,
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
        tag6,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      setscriptText('');

      toast.success('Script created successfuly', {
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
    }
  };

  const AdLaunchSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "adLaunch"), {
        title,
        scriptText,
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
        tag6,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      toast.success('Script created successfuly', {
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
    }
  };



  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />
      <div className='relative top-0 w-full'>
        <Header />

        <div className='mt-4 sm:mt-0 px-5 sm:px-12 py-6 sm:py-12 gap-y-4 sm:gap-y-8 flex flex-col'>
          <div className='flex justify-between items-center'>
            <h4 className='text-md flex items-center gap-x-2 text-[#B4B4B4]'><Link to='/'>DASHBOARD</Link> <ArrowRight2 className='w-4 sm:w-max' size="19" color="#B4B4B4" /> <Link to='/create-script'>CREATE SCRIPT</Link></h4>
          </div>

          <h1 className='text-3xl sm:text-4xl text-[#dbdbdb] font-normal'>Create Script</h1>
        </div>

        <div className='px-5 sm:px-12 gap-y-8 flex gap-x-8 h-max'>
          <form className='flex flex-col gap-y-4 h-max w-full sm:w-[33rem]'>
            <div className='flex flex-col gap-y-3 w-[33rem]'>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full hover:outline hover:outline-[#fff] transition-all bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' type="text" name='script' placeholder='Write your Title' />
              <textarea value={scriptText} onChange={(e) => setscriptText(e.target.value)} className='h-max w-full break-words hover:outline transition-all hover:outline-[#fff] bg-[#b4b4b42d] outline-none focus-visible:outline-2 focus-visible:outline-[#FDCA40] placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg resize-none' type="textarea" name='scriptText' placeholder='Write your script' />
            </div>
            <div className='flex justify-center items-center gap-2 w-[33rem]  flex-wrap'>
              <input value={tag1} onChange={(e) => settag1(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Vertical' />
              <input value={tag2} onChange={(e) => settag2(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Video Style' />
              <input value={tag3} onChange={(e) => settag3(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Angle' />
              <input value={tag4} onChange={(e) => settag4(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Team' />
              <input value={tag5} onChange={(e) => settag5(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Angle Tag' />
              <input value={tag6} onChange={(e) => settag6(e.target.value)} type="text" className='w-[49%] bg-[#b4b4b42d] outline-none border-none placeholder:text-[#ffffffc1] text-[#fff] p-4 px-3 rounded-xl text-lg' name='tag' placeholder='Other' />
            </div>
          </form>

          <div className='flex flex-col gap-y-4 pb-6 sm:w-max w-full'>
            <h3 className='text-xl text-[#dbdbdb]'>Publish to:</h3>
            <div className='gap-3 grid grid-cols-1 sm:grid-cols-2'>
              <button onClick={UGCVideosSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-full sm:w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>UGC Videos</button>
              <button onClick={VoiceoversSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-full sm:w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Voiceovers</button>
              <button onClick={VideoeditingSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-full sm:w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Video editing</button>
              <button onClick={AdLaunchSubmit} className='transition-all hover:bg-transparent hover:text-[#fff] border-2 border-[#FDCA40] w-full sm:w-64 px-14 py-3 bg-[#FDCA40] text-xl text-[#000] font-medium rounded-xl'>Ad launch</button>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default CreateSript