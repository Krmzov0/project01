import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage'; 
import { AuthContextProvider } from './Context/authContext';
import SideBar from './Components/Sidebar';
import Copywriting from './Components/Copywriting';
import UGCVideos from './Components/UGCVideos'
import Voiceovers from './Components/Voiceovers'
import VideoEditing from './Components/VideoEditing'
import AdLaunch from './Components/AdLaunch'
import CreateSript from './Components/CreateScript';

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
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
