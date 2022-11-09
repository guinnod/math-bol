import './sidebar.css';
import { Chapter } from '../chapter';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
export const Sidebar = () => {
    const chapterNames = [
        { text: 'Не үшін математиканы жек көресің', id: 1 }, { text: 'Не үшін математиканы жек көресің', id: 2 }, { text: 'Не үшін математиканы жек көресің', id: 3 }, { text: 'Не үшін математиканы жек көресің', id: 4 }, { text: 'Не үшін математиканы жек көресің', id: 5 }
    ];
    const { isTeacher, setIsAlert } = useContext(DefaultContext);
    return (
        <div className='sidebar__anchor'>
            <div className='sidebar__head'><p>Тақырыптар</p>{isTeacher ? <p onClick={() => { setIsAlert(true) }}>Өңдеу</p> : <></>}</div>
            {chapterNames.map((e) => {
                return (<Chapter chapterName={`Lesson #${(e.id)} ${e.text}`} key={chapterNames.indexOf(e.id)} />)
            })}
        </div>
    );
};