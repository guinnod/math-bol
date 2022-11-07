import './sidebar.css';
import { Chapter } from '../chapter';
export const Sidebar = () => {
    const chapterNames = [
        { text: 'Не үшін математиканы жек көресің', id: 1 }, { text: 'Не үшін математиканы жек көресің', id: 2 }, { text: 'Не үшін математиканы жек көресің', id: 3 }, { text: 'Не үшін математиканы жек көресің', id: 4 }, { text: 'Не үшін математиканы жек көресің', id: 5 }
    ];
    return (
        <div className='sidebar__anchor'>
            <p>Тақырыптар</p>
            {chapterNames.map((e) => {
                return (<Chapter chapterName={`Lesson #${(e.id)} ${e.text}`} key={chapterNames.indexOf(e.id)} />)
            })}
        </div>
    );
};