import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm a front-end developer looking for a role in an growing IT
            company, having the opportunity to work with the latest
            technologies, on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm confident, strongly commited with continous learning , and
            always working on improving my skills, tech and soft ones.
          </p>
          <p>
            If I have to define myself, I'm a very sociable and detail-oriented
            person, a present and delighted father of two beautiful teenagers,
            sports fanatic, Photoshop enthusiast, and above all persevering!!
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
        <div className="stage-cube-cont">
          <VerticalTimeline lineColor="#f6b6b6">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun-2022 - Ago-2022"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Henry</h3>
              <p id="degree"> Full-Stack Teaching Assistant</p>
              <h4 className="vertical-timeline-element-subtitle">
                Coordinate a group of students. Assist them to solve exercises
                and promote group collaboration.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Abr-2022 - Ago-2022"
              iconStyle={{ background: '#f44141' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Henry</h3>
              <p id="degree"> Full Stack Web Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                800-hours Code Bootcamp
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dic-2016 - Mar-2022"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Telefonica Movistar
              </h3>
              <p id="degree"> Team Leader</p>
              <h4 className="vertical-timeline-element-subtitle">
                Leader of a 7-member team, supporting operating management
                areas.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May-2013 - present"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Universidad de Mar del Plata
              </h3>
              <p id="degree"> University Teaching Assistant</p>
              <h4 className="vertical-timeline-element-subtitle">
                Teaching assistant at a 2nd-year subject of Electronic Engineer
                career.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Sep-2005 - Jun-2006"
              iconStyle={{ background: '#f44141' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">ESIC Madrid</h3>
              <p id="degree"> Executive MBA</p>
              <h4 className="vertical-timeline-element-subtitle">
                Ten-month executive MBA in Madrid
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="1996 - 2003"
              iconStyle={{ background: '#f44141' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Universidad de Mar del Plata
              </h3>
              <p id="degree"> Electronic Engineer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Grade point average: 8.20
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default About
