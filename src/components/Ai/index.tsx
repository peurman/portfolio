import { useEffect, useState } from 'react'
import Loader from '../Loader'
import AnimatedLetters from '../AnimatedLetters'
import { usePageTitle } from '../../hooks/usePageTitle'
import './index.scss'

interface Phase {
  tool: string
  where: string
  body: string
}

const PHASES: Phase[] = [
  {
    tool: 'Cursor',
    where: 'Digital Executive → The Tapping Solution',
    body: 'My first AI-assisted setup. At The Tapping Solution I built most of the web app with it — a greenfield React + TypeScript product taken to production. Before that, feature work and refactors at Digital Executive.',
  },
  {
    tool: 'Claude',
    where: 'The Tapping Solution',
    body: 'Adopted once the app was already in production. Used it to drive two migrations: marketing pages from ClickFunnels to React, and a PHP codebase to Astro.',
  },
  {
    tool: 'Amazon Q',
    where: 'Modernize',
    body: 'Current daily driver — feature development and code review.',
  },
]

const Ai = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  usePageTitle('AI Experience')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container ai-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'AI Experience'.split('')}
            idx={15}
          />
        </h1>
        <div className="introAi">
          <p>
            AI-assisted development has been part of my daily workflow since
            2023. A short timeline of the tools I&apos;ve worked with and what I
            built with them.
          </p>
        </div>

        <ol className="ai-phases">
          {PHASES.map((phase, i) => (
            <li className="ai-phase" key={phase.tool}>
              <span className="ai-phase-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="ai-phase-body">
                <h2 className="ai-phase-tool">{phase.tool}</h2>
                <p className="ai-phase-where">{phase.where}</p>
                <p className="ai-phase-desc">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Ai
