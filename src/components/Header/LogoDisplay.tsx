export default function LogoDisplay() {
    return (
        <div className="logoDisplay">
            <img id="logo" src="./icons/Logo.png" alt="Logo" />
            <h1 className="webname" onClick={() => location.href='index.html'}>Artisticolor</h1>
        </div>
    );
};