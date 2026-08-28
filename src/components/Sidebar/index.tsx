import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logoEM.webp'
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

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const color1 = '#e6e6e6'
  const color2 = '#f44141'
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Esteban Manrupe — home" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          end
          to="/"
          aria-label="Home"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color={color1} />
        </NavLink>
        <NavLink
          className="about-link"
          to="/about"
          aria-label="About"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color={color1} />
        </NavLink>
        <NavLink
          className="skills-link"
          to="/skills"
          aria-label="Skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faToolbox} color={color1} />
        </NavLink>
        <NavLink
          className="portfolio-link"
          to="/portfolio"
          aria-label="Portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color={color1} />
        </NavLink>
        <NavLink
          className="contact-link"
          to="/contact"
          aria-label="Contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color={color1} />
        </NavLink>
        <button
          type="button"
          className="close-icon-button"
          aria-label="Close menu"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faClose} color={color2} size="3x" />
        </button>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/estebanmanrupe/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/peurman"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/peurman"
            rel="noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="skype:live:esteban_manrupe"
            rel="noreferrer"
            target="_blank"
            aria-label="Skype"
          >
            <FontAwesomeIcon
              icon={faSkype}
              color={color1}
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="hamburger-icon-button"
        aria-label="Open menu"
        onClick={() => setShowNav(true)}
      >
        <FontAwesomeIcon icon={faBars} color={color2} size="3x" />
      </button>
    </div>
  )
}

export default Sidebar
