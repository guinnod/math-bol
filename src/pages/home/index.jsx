import './home.css';
import { Feedback } from '../../components/feedback';
import { Header } from "../../components/header";
import zhanbo from '../../media/zhanbo.png';
import phone from '../../media/phone.jpg';
import { Footer } from "../../components/footer";
export const Home = () => {
    return (
        <div>
            <Header size={30} />
            <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${phone})`, backgroundSize: 'cover' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '-400px', marginBottom: '100px' }}>
                    <img src={zhanbo} alt="zhanbo" style={{ width: '400px', position: 'relative', left: '250px', top: '100px', height: 'max-content' }} />
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBlock: '30px' }}>
                        <div className='difficultHome'>
                            <div className='t1'>Бізбен</div>
                            <div className='t2'>бірге</div>
                            <div className='t3'>Math</div>
                            <div className='t4'>Bol</div>
                        </div>
                        <div style={{ position: 'relative', left: '150px', top: '50px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}><div className="numHome">+40</div>видео сабақ</div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}><div className="numHome">+120</div>тапсырма</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '350px', backgroundColor: '#7CA9FF' }}></div>
            <div className='fontHome'>Пікрілер</div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Feedback />
            </div>

            <Footer />
        </div>
    );
};