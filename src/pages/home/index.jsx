import './home.css';
import { Feedback } from '../../components/feedback';
import { Header } from "../../components/header";
import zhanbo from '../../media/zhanbo.png';
import { Footer } from "../../components/footer";
export const Home = () => {
    return (
        <div>
            <div className="home__header">
                <Header size={30} />
            </div>
            <div className='home__content'>
                <div >
                    <img src={zhanbo} alt="zhanbo" />
                    <div>
                        <div className='home__content__text'>
                            <div>Бізбен</div>
                            <div>бірге</div>
                            <div>Math</div>
                            <div>Bol</div>
                        </div>
                        <div className='home__content__minitext'>
                            <div>
                                <div>+40</div>видео сабақ
                            </div>
                            <div>
                                <div>+120</div>тапсырма
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__line'></div>
            <div className='home__feedback'>
                <div>Пікрілер</div>
                <div className='home__feedback__carousel'>
                    <Feedback />
                </div>
            </div>
            <Footer />
        </div>
    );
};