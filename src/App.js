import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import { AuthContextProvider, UserAuth } from './Context/authContext';
import SideBar from './Components/Sidebar';
import Copywriting from './Pages/Copywriting';
import UGCVideos from './Pages/UGCVideos'
import Voiceovers from './Pages/Voiceovers'
import VideoEditing from './Pages/VideoEditing'
import AdLaunch from './Pages/AdLaunch'
import CreateSript from './Pages/CreateScript';
import Account from './Pages/Account';
import Signin from './Pages/Signin';
import Hussein from './Pages/Hussein'
import Zishan from './Pages/Zishan'
import Sakina from './Pages/Sakina'

function App() {

  const { user } = UserAuth();

  return (
    <>
      {user?.displayName ? <div className='flex'>
        <SideBar />
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/copywriting' element={<Copywriting />} />
            <Route path='/ugc-videos' element={<UGCVideos />} />
            <Route path='/voiceovers' element={<Voiceovers />} />
            <Route path='/video-editing' element={<VideoEditing />} />
            <Route path='/ad-launch' element={<AdLaunch />} />
            <Route path='/ad-launch/zishan' element={<Zishan />} />
            <Route path='/ad-launch/sakina' element={<Sakina />} />
            <Route path='/ad-launch/hussein' element={<Hussein />} />
            <Route path='/create-script' element={<CreateSript />} />
            <Route path='/account' element={<Account />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </AuthContextProvider>
      </div> : <Signin />}
    </>
  );
}

export default App;
