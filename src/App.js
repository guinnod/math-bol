import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { Profile } from './pages/profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Main/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;