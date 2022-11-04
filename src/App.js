import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Profile } from './components/profile';
import { ProfileDrop } from './components/profile-drop';
import { DefaultContext } from './Context';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { Page } from './pages/page';

function App() {
  const[isTask, setIsTask] = useState(false);
  const[isAuth, setIsAuth] = useState(false);
  return (
    <DefaultContext.Provider value={{isTask, setIsTask, isAuth, setIsAuth}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Page content={<Main />} />}></Route>
          <Route path='/profile' element={<Page content={<Profile />} />}></Route>
          <Route path='/*' element={<Page content={<ProfileDrop />}/>}></Route>
        </Routes>
      </div>
    </DefaultContext.Provider>
  );
}

export default App;