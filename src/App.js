import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Profile } from './components/profile';
import { StudentsList } from './components/students-list';
import { DefaultContext } from './Context';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { Page } from './pages/page';

function App() {
  const [isTask, setIsTask] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isTeacher, setIsTeacher] = useState(true);
  const [isAlert, setIsAlert] = useState(false);
  const [isAlertList, setIsAlertList] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  return (
    <DefaultContext.Provider value={{
      isTask, setIsTask,
      isAuth, setIsAuth,
      isTeacher, setIsTeacher,
      isAlert, setIsAlert,
      isAlertList, setIsAlertList,
      showDrop, setShowDrop
    }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Page content={<Main />} />}></Route>
          <Route path='/profile' element={<Page content={<Profile />} />}></Route>
          <Route path='/*' element={<Page content={<StudentsList />} />}></Route>
        </Routes>
      </div>
    </DefaultContext.Provider>
  );
}

export default App;