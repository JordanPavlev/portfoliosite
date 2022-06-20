import './styles.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logoimg.png'
import * as React from 'react'
import { render } from 'react-dom'
import LoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMicrosoft, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='navigation-bar'>
            <Link  className='logo' to='/'>
                <img src={LogoS} alt="Big capital letter s"/>
                
            </Link>
            <nav>
                <NavLink exact="true" activeclassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="black"/>
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="contact-link" to="/contacts">
                    <FontAwesomeIcon icon={faEnvelope} color="black"/>
                </NavLink>
                    
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="norefferer" href="https://www.youtube.com/channel/UCjBzMRKISUSUc1j3sK9qbfA">
                        <FontAwesomeIcon icon={faYoutube} color="black"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefferer" href="https://github.com/JordanPavlev">
                        <FontAwesomeIcon icon={faGithub} color="black"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefferer" href="https://account.microsoft.com/?ref=MeControl&refd=www.microsoft.com">
                        <FontAwesomeIcon icon={faMicrosoft} color="black"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefferer" href="#">
                        <FontAwesomeIcon icon={faLinkedin} color="black"/>
                    </a>
                </li>
            </ul>   
        </div>
    )
}

export default Sidebar;