import wave from './Wave3.svg'
import './Header.css';
import { Link } from 'react-router-dom';
function Header () {
    return (
        <>
            <header>
            <div id="ambience">
                Ambience
            </div>
            <navbar>
                <Link to="/Home">The Sky</Link>
                <Link to="/Weather">Weather</Link>
                <Link to="/Compass">Compass</Link>
            </navbar>
            </header>
            <img src={wave}></img>
        </>
    )
}
export default Header;