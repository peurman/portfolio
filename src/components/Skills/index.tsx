import { useEffect, useState } from 'react'
import Loader from '../Loader'
import AnimatedLetters from '../AnimatedLetters'
import skillsData from '../../data/skills.json'
import type { Skill, SkillCategory } from '../../types'
import './index.scss'

const GROUPS: { id: SkillCategory; label: string }[] = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Databases & Tools' },
]

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const skills = skillsData.skills as Skill[]

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
            The tools I reach for day to day — focused on <b>React</b> and{' '}
            <b>TypeScript</b>, with enough backend and DevOps to own a feature
            end to end.
          </p>
        </div>

        {GROUPS.map((group) => {
          const groupSkills = skills.filter((s) => s.category === group.id)
          if (!groupSkills.length) return null
          return (
            <section className="skills-group" key={group.id}>
              <h2 className="skills-group-title">{group.label}</h2>
              <div className="images-container">
                {groupSkills.map((el) => (
                  <div className="image-box" key={el.name}>
                    <img src={el.img} className="skill-image" alt={el.name} />
                    <p className="title">{el.name}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Skills
