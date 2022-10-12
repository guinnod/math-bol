import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LoadTask } from './components/load-task';
import { Profile } from './components/profile';
import { DefaultContext } from './Context';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { Page } from './pages/page';

function App() {
  const[isTask, setIsTask] = useState(false);
  return (
    <DefaultContext.Provider value={{isTask, setIsTask}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Page content={<Main />} />}></Route>
          <Route path='/profile' element={<Page content={<Profile />} />}></Route>
          <Route path='/*' element={<LoadTask />}></Route>
        </Routes>
      </div>
    </DefaultContext.Provider>
  );
}

export default App;