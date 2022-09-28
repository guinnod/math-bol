import './footer.css';
import whatsapp from '../../media/whatsapp.png';
import instagram from '../../media/instagram.png';
import telegram from '../../media/telegram.png';
export const Footer = () => {
    return (
        <div className='anchorFooter'>
            <div style={{marginRight: '280px', paddingBottom: '30px'}}>
                <h2 style={{color: 'white', textAlign: 'center'}}>Бізбен байланыс:</h2>
                <div className='imgFooter'>
                    <img src={instagram} alt="instagram" className='logoFooter' />
                    <img src={whatsapp} alt="whatsapp" className='logoFooter' />
                    <img src={telegram} alt="telegram" className='logoFooter' />
                </div>
            </div>
        </div>
    );
};