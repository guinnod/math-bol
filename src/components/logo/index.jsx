import './logo.css';
export const Logo = ({ size }) => {
    return (
        <div className="anchorLogo" style={{ height: `${size}px` }}>
            <div className='textLogo' style={{ fontSize: `${size}px` }}>Math</div>
            <div className='textLogo rotateLogo' style={{ fontSize: `${size}px`, marginTop: `${size / 2}px`, marginLeft: `${size / 8}px` }}>Bol</div>
        </div>
    );
};