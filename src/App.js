import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage'; 
import { AuthContextProvider } from './Context/authContext';
import SideBar from './Components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <AuthContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
