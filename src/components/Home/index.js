import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import YO from '../../assets/images/YO.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  let color1 = '#e6e6e6'
  // let color2 = '#f44141'
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _1`}>Hi!</span>
            <br />
            <span className={`${letterClass} _13`}>I'm</span>
            <br />
            <AnimatedLetters
              letterClass={`${letterClass} _name`}
              strArray={'Esteban Manrupe'.split()}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={`${letterClass} _27`}
              strArray={'web developer'.split('')}
              idx={27}
            />
          </h1>
          <div className="container-me">
            <img src={YO} alt="Esteban Manrupe, Web Developer" />
          </div>
          <h2>Front End Developer / Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="container-links">
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
              <a
                href="https://github.com/peurman"
                target="_blank"
                rel="noreferrer"
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
              <a
                href="skype:live:esteban_manrupe"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faSkype}
                  color={color1}
                  className="anchor-icon"
                />
              </a>
            </li>
          </ul>
        </div>{' '}
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Home
