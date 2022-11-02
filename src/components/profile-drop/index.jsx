import './profile-drop.css';
export const ProfileDrop = () => {
    return (
        <div className='profile-drop-anchor'>
            <div className="drop-top">
                <div className="ava-drop">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebdea04210d5875d455c8dedaf" alt="" className='ava-drop' />
                    <div className="username">
                        <h2>Username</h2>
                        <p>Status</p>
                    </div>
                </div>
                <div className="drops">
                    <h3>Zheke Cabinet</h3>
                    <h3>Okushy retteu</h3>
                    <h3>Okushu bagalau</h3>
                </div>
            </div>
        </div>
    );
};