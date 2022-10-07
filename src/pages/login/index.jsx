import './login.css';
import { Logo } from '../../components/logo';
import { Footer } from "../../components/footer";
import { useState } from 'react';
export const Login = () => {
    const [isSign, setIsSign] = useState(true);

    return (
        <div className='loginAnchor'>
            <div className='loginHeader'>
                <Logo size={40} />
            </div>
            <div className='anchorLogin'>
                <div style={{marginBottom: '30px'}}><Logo size={160} /></div>
                
                <div className='loginCenter'>
                    <div className='switchLogin'>
                        <div className={isSign ? 'checked' : ''} onClick={() => { setIsSign(!isSign) }}>Кіру</div>
                        <div className={!isSign ? 'checked' : ''} onClick={() => { setIsSign(!isSign) }}>Тіркелу</div>
                    </div>
                    <div>
                        <input type="email" className='inputLogin' placeholder='Электронды почта' />
                        <input type="password" className='inputLogin' placeholder='Құпия сөз' />
                        {!isSign ? <input type="password" className='inputLogin' placeholder='Құпия сөзді қайталаңыз' /> : <></>}
                    </div>
                    <div className='signParent'>
                        <div className='signLogin'>Кіру</div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
};