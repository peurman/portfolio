import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/images/logoEM.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  let color1 = '#e6e6e6'
  let color2 = '#f44141'
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color={color1} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color={color1} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faToolbox} color={color1} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color={color1} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color={color1} />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color={color2}
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/estebanmanrupe/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/peurman" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/peurman77"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="skype:live:esteban_manrupe" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color={color2}
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
