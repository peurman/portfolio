import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
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
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const color1 = '#e6e6e6'

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
              strArray={['Esteban Manrupe']}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={`${letterClass} _27`}
              strArray={'frontend developer'.split('')}
              idx={27}
            />
          </h1>
          <div className="container-me">
            <img src={YO} alt="Esteban Manrupe, Frontend Developer" />
          </div>
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
                href="https://www.instagram.com/peurman"
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
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Home
