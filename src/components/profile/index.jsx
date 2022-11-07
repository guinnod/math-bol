import './profile.css';
import shapo from '../../media/shapo.png';
import camera from '../../media/camera.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Profile = () => {
    const percents = [98, 76, 0, 8, 63];

    return (
        <div className='profile__anchor'>
            <div>
                <div className='card__profile'>
                    <div>
                        <img src={shapo} alt="shapo" className='profile__avatar' />
                        <div className='camera-image'><img src={camera} alt="camera" /></div>
                    </div>
                    <div className='card__profile__name'>
                        <div>Username</div>
                        <div>status</div>
                    </div>
                </div>
                <div className='profile__lessons'>
                    {percents.map((e) => {
                        return (
                            <div key={e}>
                                <div>
                                    <h2>{`Lesson #${percents.indexOf(e) + 1}`}<span className='lesson__percent'>{`${e}%`}</span></h2>
                                </div>
                                <hr />
                            </div>);
                    })}
                </div>
            </div>
            <div className='profile__circular'>
                <CircularProgressbar value={0} text={`${0}%`} />
            </div>
        </div>

    );
};