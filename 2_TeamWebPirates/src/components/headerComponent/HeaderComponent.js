import IMAGES from '../../../utilities/image-exporter';

const HeaderComponent = () => {
    return  (
        <header>
            <h1>TEAM WEB PIRATES</h1>
            <img src={IMAGES.teamLogo} alt="Web Pirates's Team Logo" height="50px"/>
            <input className="search" placeholder="type something here.."/>
        </header>
    )
}

export default HeaderComponent;
