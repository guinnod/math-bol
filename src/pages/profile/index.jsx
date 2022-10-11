import './profile.css';
import shapo from '../../media/shapo.png';
import camera from '../../media/camera.png';
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chapter } from '../../chapter';

export const Profile = () => {
    const percents = [98, 76, 0, 8, 63];
    const chapterNames = [
        { text: 'Не үшін математиканы жек көресің', id: 1 }, { text: 'Не үшін математиканы жек көресің', id: 2 }, { text: 'Не үшін математиканы жек көресің', id: 3 }, { text: 'Не үшін математиканы жек көресің', id: 4 }, { text: 'Не үшін математиканы жек көресің', id: 5 }
    ];
    return (
        <div>
            <Header size={30} />
            <div className='anchorProfile'>
                <div className='sideMain' style={{height: 'fit-content'}}>
                    <p>Тақырыптар</p>
                    {chapterNames.map((e) => {
                        return (<Chapter chapterName={`Lesson #${(e.id)} ${e.text}`} key={chapterNames.indexOf(e.id)} />)
                    })}
                </div>
                <div className='profile-anchor'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }}>
                            <div className='profile-ava'>
                                <img src={shapo} alt="shapo" className='avatar' />
                                <div className='camera-image'><img src={camera} alt="shapo" /></div>
                            </div>
                            <div>
                                <h1>Username</h1>
                                <p>status</p>
                            </div>
                        </div>
                        <div className='circular'>
                            <CircularProgressbar value={0} text={`${0}%`} />
                        </div>
                    </div>
                    {percents.map((e) => {
                        return (<div style={{ width: '200px' }} key={e}>
                            <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
                                <h2>{`Lesson #${percents.indexOf(e) + 1}`}</h2>
                                <h2>{`${e}%`}</h2>
                            </div>
                            <hr />
                        </div>);
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};