// import './menuBar.css';
import music from '../images/music.png';
import stylesMyMusic from './myMusic.module.css';
import { Link } from 'react-router-dom';

function MyMusic() {
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'white', height:'0px' }} to="myMusicList">
                <div id={stylesMyMusic.myMusic}> { /*maybe the problem */}
                    <div>
                        <span id={stylesMyMusic.my}>My</span>
                        <img id={stylesMyMusic.img} src={music} alt={music}></img>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MyMusic;