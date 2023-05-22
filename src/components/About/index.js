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
import { Link } from 'react-router-dom'
import CV from '../../assets/Esteban_Manrupe_Resume.pdf'

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
        <div className="text-zone text-zone-narrow">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm a web developer, currently working as an Angular
            developer, listening to job opportunities in an IT company with
            challenging and diverse projects.
          </p>
          <p>
            I'm confident, strongly committed to lifelong learning, meticulous,
            with keen eye for details. Hands-on and goals-oriented, with an
            analytical profile. Team player and team leader.
          </p>
          <p>Always working on improving my skills, tech and soft ones.</p>
          <p>
            If I have to define myself in a few sentences, it would by like...
            Sociable, positive and detail-oriented. Delighted and always present father
            of two beautiful teenagers. Amateur multisportsman. Modest
            drummer. Beginner level singer. Passionate about music. Photoshop
            enthusiast and, above all, undoubtedly persevering!
          </p>
        </div>
        <Link to={CV} target="_blank" className="flat-button2" download>
          MY RESUME
        </Link>
        <div className="stage-cube-cont">
          <VerticalTimeline lineColor="#f6b6b6">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Mar-2023 - present"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Applaudo</h3>
              <p id="degree"> Angular developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Angular frontend developer
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Dec-2022 - Feb-2023"
              iconStyle={{ background: '#f44141' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Applaudo</h3>
              <p id="degree">Angular Trainee Program</p>
              <h4 className="vertical-timeline-element-subtitle">
                3-month Trainee Program
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun-2022 - Aug-2022"
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
              date="Apr-2022 - Aug-2022"
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
              date="Dec-2016 - Mar-2022"
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
