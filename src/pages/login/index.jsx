import './login.css';
import { Logo } from '../../components/logo';
import { Footer } from "../../components/footer";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [isSign, setIsSign] = useState(true);
    const navigate = useNavigate();
    return (
        <div className='login__anchor'>
            <div className='login__header'>
                <Logo size={40} />
            </div>
            <div>
                <div className='login__center'>
                    <div><Logo size={150} /></div>
                    <div className='login__content'>
                        <div>
                            <div className={isSign ? 'login__switch --checked' : 'login__switch'} onClick={() => { setIsSign(!isSign) }}>Кіру</div>
                            <div className={!isSign ? 'login__switch --checked' : 'login__switch'} onClick={() => { setIsSign(!isSign) }}>Тіркелу</div>
                        </div>
                        <div>
                            <input type="email" className='login__input' placeholder='Электронды почта' />
                            <input type="password" className='login__input' placeholder='Құпия сөз' />
                            <input type="password" className={!isSign ? 'login__input' : 'login__input --hidden'} placeholder='Құпия сөзді қайталаңыз' />
                        </div>
                    </div>
                    <div>
                        <div className='login__button' onClick={() => { navigate('../home') }}>{isSign ? 'Кіру' : 'Тіркелу'}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};