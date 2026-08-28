import { useEffect, useState } from 'react'
import Loader from '../Loader'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import type { Project } from '../../types'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderPortfolio = (portfolio: Project[]) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt={port.title}
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                {port.deploy && (
                  <a
                    className="btn"
                    href={port.deploy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DEPLOY
                  </a>
                )}
                {port.repo && (
                  <a
                    className="btn"
                    href={port.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    REPOSITORY
                  </a>
                )}
                {port.video && (
                  <a
                    className="btn"
                    href={port.video}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIDEO
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="introPortfolio">
          <p>
            These are some of my projects. I am working on new ones, so I will
            be continuously updating this section...
          </p>
        </div>
        <div className="container-portfolios">
          {renderPortfolio(portfolioData.portfolio as Project[])}
        </div>
      </div>
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Portfolio
