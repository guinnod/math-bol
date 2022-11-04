import "./logo.css";
export const Logo = ({ size }) => {
    return (
        <div className="logo__anchor" style={{ fontSize: `${size}px` }}>
            <div className="logo__text">Math</div>
            <div className="logo__text logo__text--rotated">Bol</div>
        </div>
    );
};