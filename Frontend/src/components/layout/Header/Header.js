import {ReactNavbar} from 'overlay-navbar'
import {FaUserAlt,FaSearch} from 'react-icons/fa'
import logo from '../../../images/logo.jfif'

const Header =()=>{
   
   
    return <ReactNavbar
    
      burgerColor ="#eb4034"
      burgerColorHover ="#ae2024"
      logo={logo}
      logoWidth ="20vmax"
      navColor1="white"
      logoHoverSize ="10px"
      logoHoverColor ="white"
      link1Text ="Home"
      link2Text ="Products"
      link3Text ="Contact"
      link4Text ="AboutUs"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size ="1.6vmax"
      link1Color="rgba(35,35,35,0.8)"
      link1ColorHover="#eb4032"
      link2Margin="3vmax"
      link3Margin="0"
      link4Margin="3vmax"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
     
   


    
    
    />
}


export default Header