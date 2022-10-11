import './profile.css';
import shapo from '../../media/shapo.png';
import camera from '../../media/camera.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Profile = () => {
    const percents = [98, 76, 0, 8, 63];

    return (
        <div className='profile-anchor'>
            <div>
                <div className='card-profile'>

                    <div className='profile-ava'>
                        <img src={shapo} alt="shapo" className='avatar' />
                        <div className='camera-image'><img src={camera} alt="shapo" /></div>
                    </div>
                    <div className='card-profile-name'>
                        <div>Username</div>
                        <div>status</div>
                    </div>

                </div>
                <div className='lessons-profile'>
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

            <div className='circular'>
                <CircularProgressbar value={0} text={`${0}%`} />
            </div>


        </div>

    );
};