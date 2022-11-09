import './header.css';
import { Logo } from '../logo';
import { ProfileDrop } from '../profile-drop';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
export const Header = ({ size }) => {
    const { isAuth, setIsAuth, showDrop, setShowDrop } = useContext(DefaultContext);
    let navigate = useNavigate();
    return (
        <div className='header__root'>
            <div className='header__anchor'>
                <Logo size={size} />
                <div onClick={() => { if (isAuth) { setShowDrop(!showDrop) } else { setIsAuth(true); navigate("login") } }}
                    className='header__signin'>{isAuth ? 'Username' : 'Кіру/Тіркелу'}</div>
            </div>
            {showDrop ? <div className='header__drop'>
                <ProfileDrop />
            </div> : <></>}
        </div>
    );
};