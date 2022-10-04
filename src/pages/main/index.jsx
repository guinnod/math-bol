import './main.css';

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
export const Main = () => {
    return (
        <div>
            <Header size={30} />

            <div className='anchorMain'>
                <div className='sideMain'>
                    <div className='chapterMain'>

                    </div>
                    <div className='chapterMain'>

                    </div>
                    <div className='chapterMain'>

                    </div>
                    <div className='chapterMain'>

                    </div>
                    <div className='chapterMain'>

                    </div>
                    <div className='chapterMain'>

                    </div>
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