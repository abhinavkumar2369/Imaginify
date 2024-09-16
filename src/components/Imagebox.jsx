import './Imagebox.css'

function Imagebox({ children }) {
    return (
        <div className="main">
            <div className="image-box">
                {children}
            </div>
        </div>
    );
}

export default Imagebox;