import './profile-drop.css';
export const ProfileDrop = () => {
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
                    <h3>Статистика</h3>
                    <h3>Шығу</h3>
                </div>
            </div>
        </div>
    );
};