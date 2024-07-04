import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import VerifyPage from './Pages/VerifyPage';
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/verify/:email' element={<VerifyPage/>} />


    </Routes>
  );
}

export default App;
