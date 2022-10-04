import './main.css';

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Chapter } from '../../chapter';
export const Main = () => {
    const chapterNames = [
        {text: 'Не үшін математиканы жек көресің', id: 1}, {text: 'Не үшін математиканы жек көресің', id: 2}, {text: 'Не үшін математиканы жек көресің', id: 3}, {text: 'Не үшін математиканы жек көресің', id: 4}, {text: 'Не үшін математиканы жек көресің', id: 5}
    ];
    return (
        <div>
            <Header size={30} />

            <div className='anchorMain'>
                <div className='sideMain'>
                    <p>Тақырыптар</p>
                    {chapterNames.map((e)=> {
                        return(<Chapter chapterName={`Lesson #${(e.id)} ${e.text}`} key={chapterNames.indexOf(e.id)}/>)
                    })}
                </div>
                <div className='videoMain'>
                    <p>Lesson#1, Не үшін математиканы жек көресің?</p>
                    <div id="player"></div>

                </div>
            </div>

            <Footer />
        </div>
    );
};