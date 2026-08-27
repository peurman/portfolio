import { useEffect, useState } from 'react'
import Loader from '../Loader'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CV from '../../assets/Esteban_Manrupe_Resume.pdf'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
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
            I'm a Frontend Developer with 5+ years of experience building React
            applications, primarily for US-based clients in remote settings.
            I'm currently a Senior Frontend Developer at Modernize.
          </p>
          <p>
            I enjoy collaborating closely with teams, proactively jumping in
            where needed, sharing what I know, and sweating the details on UI
            and UX until things feel just right.
          </p>
          <p>
            I have a background in Electronic Engineering and team leadership,
            and I use AI-assisted development tools (Cursor, Claude, Amazon Q)
            as part of my daily workflow. Analytical, meticulous, hands-on and
            goals-oriented, and strongly committed to lifelong learning.
          </p>
          <p>
            If I have to define myself in a few sentences, it would be like...
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
              date="Jan-2026 - present"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Modernize</h3>
              <p id="degree"> Senior Frontend Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Resolving UI tickets on a large-scale project across 6
                cross-functional teams, and acting as UI Specialist building
                shared components adopted across the whole project.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dec-2024 - Dec-2025"
              iconStyle={{ background: '#f44141' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">
                The Tapping Solution
              </h3>
              <p id="degree"> Frontend Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Led frontend development of a greenfield web app porting a
                production iOS/Android product to React + TypeScript. Integrated
                RevenueCat & Stripe, Algolia, Amplitude & Braze. Built UI with
                Tailwind, MUI, Zustand and React Hook Form.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Sep-2023 - Nov-2024"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">
                Digital Executive
              </h3>
              <p id="degree"> Frontend UI Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Translated Figma designs into responsive, pixel-perfect React
                components with Tailwind, ensuring accessibility and
                cross-browser compatibility.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun-2023 - Aug-2023"
              iconStyle={{ background: '#f44141' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">
                Aconcagua Software
              </h3>
              <p id="degree"> React Frontend Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Integrated a biometric recognition system (facial and
                fingerprint) into a React app, and contributed to a Vue project
                unifying table styling.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Nov-2022 - May-2023"
              iconStyle={{ background: '#f6b6b6' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Applaudo</h3>
              <p id="degree"> Angular Frontend Developer</p>
              <h4 className="vertical-timeline-element-subtitle">
                Developed and maintained Angular applications: feature
                development, bug resolution and timely delivery across multiple
                projects.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Dec-2022 - Feb-2023"
              iconStyle={{ background: '#f44141' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
              icon={<FontAwesomeIcon icon={faBriefcase} />}
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
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
              icon={<FontAwesomeIcon icon={faBriefcase} />}
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
              icon={<FontAwesomeIcon icon={faBriefcase} />}
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
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
      <Loader type="ball-rotate" active />
    </>
  )
}

export default About
