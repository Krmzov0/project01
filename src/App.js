import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Signin from './Components/Signin';
import { AuthContextProvider } from './Context/authContext';

function App() {
  return (
    <div>
      <Header />
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
