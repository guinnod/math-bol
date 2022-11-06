import './feedback.css';
import shapo from '../../media/shapo.png';

export const Feedback = () => {
    return (
        <div className='feedback__anchor'>
            <div className='feedback__head'>
                <img src={shapo} alt="" />
                <div>
                    <h2 style={{ fontSize: '1em' }}>Shapagat Aisagali</h2>
                    <p style={{ fontSize: '0.85em' }}>Назарбаев университетінің ректоры</p>
                </div>
            </div>
            <p style={{ userSelect: 'none' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    );
};