import './main.css';

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Chapter } from '../../chapter';
import { Task } from '../../components/task';
import { VideoLesson } from '../../components/video';
export const Main = ({ isTask }) => {
isTask = true;
    const chapterNames = [
        { text: 'Не үшін математиканы жек көресің', id: 1 }, { text: 'Не үшін математиканы жек көресің', id: 2 }, { text: 'Не үшін математиканы жек көресің', id: 3 }, { text: 'Не үшін математиканы жек көресің', id: 4 }, { text: 'Не үшін математиканы жек көресің', id: 5 }
    ];
    return (
        <div>
            <Header size={30} />

            <div className='anchorMain'>
                <div className='sideMain'>
                    <p>Тақырыптар</p>
                    {chapterNames.map((e) => {
                        return (<Chapter chapterName={`Lesson #${(e.id)} ${e.text}`} key={chapterNames.indexOf(e.id)} />)
                    })}
                </div>
                {isTask ?
                    <VideoLesson /> :
                    <Task />}
            </div>

            <Footer />
        </div>
    );
};