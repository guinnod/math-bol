import { useContext } from 'react';
import { DefaultContext } from '../../Context';
import './profile-drop.css';
export const ProfileDrop = () => {
    const { isTeacher, setIsAlertList, setShowDrop } = useContext(DefaultContext);
    return (
        <div className='drop__anchor'>
            <div>
                <div className="drop__ava">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebdea04210d5875d455c8dedaf" alt="" />
                    <div className="drop__username">
                        <h2>Username</h2>
                        <p>Status</p>
                    </div>
                </div>
                <div className="drop__list">
                    <h3>Жеке Кабинет</h3>
                    {isTeacher ? <>
                        <h3 onClick={() => { setShowDrop(false); setIsAlertList(true); }}>Оқушыларды реттеу</h3>
                        <h3 onClick={() => { }}>Оқушыларды бағалау</h3>
                    </> :
                        <><h3>Статистика</h3>
                            <h3>Шығу</h3>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};