import './header.css';
import { Logo } from '../logo';
import { useState } from 'react';
import { ProfileDrop } from '../profile-drop';
import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
export const Header = ({ size }) => {
    const [showDrop, setShowDrop] = useState(false);
    const { isAuth, setIsAuth } = useContext(DefaultContext);
    let navigate = useNavigate();
    return (
        <div className='root-anchor'>
            <div className='anchorHeader'>
                <Logo size={size} />
                <div onClick={() => { if (isAuth) { setShowDrop(!showDrop) } else { setIsAuth(true); navigate("login") } }} className='signInHeader'>{isAuth ? 'Username' : 'Кіру/Тіркелу'}</div>
            </div>
            {showDrop ? <div className='drop'>
                <ProfileDrop />
            </div> : <></>}
        </div>
    );
};