import './footer.css';
import whatsapp from '../../media/whatsapp.png';
import instagram from '../../media/instagram.png';
import telegram from '../../media/telegram.png';

export const Footer = () => {
    return (
        <div className='footer__anchor'>
            <div className='footer__content'>
                <h2>Бізбен байланыс:</h2>
                <div className='footer__images'>
                    <img src={instagram} alt="instagram" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={telegram} alt="telegram" />
                </div>
            </div>
        </div>
    );
};