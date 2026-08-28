import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Loader from '../Loader'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { usePageTitle } from '../../hooks/usePageTitle'
import './index.scss'
import Swal from 'sweetalert2'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef<HTMLFormElement>(null)
  usePageTitle('Contact')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        'service_ps1dxoa',
        'template_otjjqvo',
        form.current,
        'nPAePCH-FVEXevF6R'
      )
      .then(
        () => {
          Swal.fire(
            'Message successfully sent!',
            'Thanks for contacting me!',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
          })
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Failed to send the message, please try again',
          })
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in working in a company where I feel challenged,
            being able to grow professionally as a <i>frontend developer</i>
          </p>
          <p>
            If you wish to contact me, if you have any questions or suggestions,
            you can do it through this form. Thanks!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    aria-label="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    aria-label="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    aria-label="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    aria-label="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-rotate" active />
    </>
  )
}

export default Contact
