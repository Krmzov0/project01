import './App.css';
import { Route, Routes } from 'react-router-dom';
import GoogleAuth from './Components/GoogleAuth/Signin';
import MainPage from './Components/MainPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/auth' element={ <GoogleAuth /> } />
        <Route path='/' element={ <MainPage /> } />
      </Routes>
    </>
  );
}

export default App;
