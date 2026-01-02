import "./LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loader-core">
                <h1>&lt;booting /&gt;</h1>
                <span className="loader-bar" />
                <p>Initializing the cool stuff&hellip;</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
