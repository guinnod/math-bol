import './header.css';
import { Logo } from '../logo';
export const Header = ({ size }) => {
    return (
        <div className='anchorHeader'>
            <Logo size={size}/>
            <div className='signInHeader'>Кіру/Тіркелу</div>
        </div>
    );
};