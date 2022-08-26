import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className="text-animate _1">Hi!</span>
            {/* <span className={`${letterClass} _12`}>i!</span> */}
            <br />
            <span className={`text-animate _13`}>I'm</span>
            <br />
            {/* <span className={`${letterClass} _14`}>'m</span> */}
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
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
          <h2>Full Stack Web Developer / Front End Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="ball-rotate" />
    </>
  )
}

export default Home
