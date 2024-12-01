import './styles/popup.scss'

import instagram from '../../../Images/social/instagram.png'
import linkedin from '../../../Images/social/linkedin.png'
import telegram from '../../../Images/social/telegram.png'
import youtube from '../../../Images/social/YouTube.png'

const PopUp = () => {
    //const popup = document.getElementById(popup);
    return (
        <div id="popup" className='popup'>
            <p className='popup-h1'>через социальные cети:</p>

            <div className="popup-container">
                <button className="popup-container-btn">
                    <img className='popup-container-logo' src={telegram} alt="!#" />
                    <p className='popup-container-text'>Telegram</p>
                </button>
                <button className="popup-container-btn">
                    <img className='popup-container-logo' src={instagram} alt="!#" />
                    <p className='popup-container-text'>Instagram</p>
                </button>
                <button className="popup-container-btn">
                    <img className='popup-container-logo' src={linkedin} alt="!#" />
                    <p className='popup-container-text'>Linkeding</p>
                </button>
                <button className="popup-container-btn">
                    <img className='popup-container-logo' src={youtube} alt="!#" />
                    <p className='popup-container-text'>Youtube</p>
                </button>
            </div>
        </div>
    );
}

export default PopUp;
