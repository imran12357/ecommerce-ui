import Playstore from '../../../images/PlayStore.png'
import appstore from '../../../images/AppStore.png'
import './Footer.css'


const Footer =()=>{
    return (
        <footer id="footer">
            <div class="leftfooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App For Android And Ios Mobile Phone</p>
                <img  src={Playstore} alt="playstore"/>
                <img id="appstore" src={appstore} alt="appstore"/>

            </div>
            <div class="midfooter">
                <h1>Ecommerce</h1>
                <p>High quality is our first priority</p>
                <p>copyrights 2021&copy, meImran</p>

            </div>
            <div class="rightfooter">
                <h4>Follow us on </h4>
                <a href="https://www.instagram.com/imran.xi/">Instagram</a>
                <a href="https://www.instagram.com/imran.xi/">Instagram</a>
                <a href="https://www.instagram.com/imran.xi/">Instagram</a>

            </div>



        </footer>
    );
};

export default Footer