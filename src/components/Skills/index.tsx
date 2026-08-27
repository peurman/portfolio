import { useEffect, useState } from 'react'
import Loader from '../Loader'
import AnimatedLetters from '../AnimatedLetters'
import skillsData from '../../data/skills.json'
import type { Skill } from '../../types'
import './index.scss'
import 'react-vertical-timeline-component/style.min.css'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderSkills = (list: Skill[]) => {
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
            These are my technical skills, focused on <b>React</b> and{' '}
            <b>TypeScript</b> for building modern web apps.
          </p>
        </div>
        <div className="container-skills">
          {renderSkills(skillsData.skills)}
        </div>
      </div>
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Skills
