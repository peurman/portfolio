import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import skillsData from '../../data/skills.json'
import './index.scss'
import 'react-vertical-timeline-component/style.min.css'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderSkills = (list) => {
    return (
      <div className="images-container">
        {list.map((el, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={el.img} className="skill-image" alt={el.name} />
              <div className="content">
                <p className="title">{el.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container skills-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Skills'.split('')}
            idx={15}
          />
        </h1>
        <div className="introSkills">
          <p>
            These are my technical skills, recently adding{' '}
            <b>Angular-Typescript</b> projects...
          </p>
        </div>
        <div className="container-skills">
          {renderSkills(skillsData.skills)}
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Skills
