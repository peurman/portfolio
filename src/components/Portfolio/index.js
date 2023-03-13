import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import porftolioData from '../../data/portfolio.json'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })

  const renderPortfolio = (portfolio) => {
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
                <button
                  className="btn"
                  onClick={() => window.open(port.deploy)}
                >
                  DEPLOY
                </button>
                <button className="btn" onClick={() => window.open(port.repo)}>
                  REPOSITORY
                </button>
                <button className="btn" onClick={() => window.open(port.video)}>
                  VIDEO
                </button>
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
          {renderPortfolio(porftolioData.portfolio)}
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Portfolio
