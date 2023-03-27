import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage'; 
import { AuthContextProvider } from './Context/authContext';
import SideBar from './Components/Sidebar';
import Copywriting from './Pages/Copywriting';
import UGCVideos from './Pages/UGCVideos'
import Voiceovers from './Pages/Voiceovers'
import VideoEditing from './Pages/VideoEditing'
import AdLaunch from './Pages/AdLaunch'
import CreateSript from './Pages/CreateScript';
import Account from './Pages/Account';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <AuthContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/copywriting' element={<Copywriting />} />
            <Route path='/ugc-videos' element={<UGCVideos />} />
            <Route path='/voiceovers' element={<Voiceovers />} />
            <Route path='/video-editing' element={<VideoEditing />} />
            <Route path='/ad-launch' element={<AdLaunch />} />
            <Route path='/create-script' element={<CreateSript />} />
            <Route path='/account' element={<Account />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
