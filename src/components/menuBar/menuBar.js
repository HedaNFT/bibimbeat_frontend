import ConnectWallet from './connectWallet';
import BibimbeatLogo from './logo';
import MainMenu from './mainMenu';
import MyMusic from './myMusic';
import DotMenu from './dotMenu';
import stylesMenuBar from './menuBar.module.css';

function MenuBar() {
    return (
    <nav>
        <div className={stylesMenuBar.flexContainer}>
            <div className={stylesMenuBar.logoMenuBar}><BibimbeatLogo /></div>
            <div>
                <MainMenu />
            </div>
            <div>
            </div>
            <div className={stylesMenuBar.rightMenuBar}>
                <MyMusic />
                <ConnectWallet />
                <DotMenu />
            </div>
   
        </div>

    </nav>
    );
  }


  export default MenuBar;