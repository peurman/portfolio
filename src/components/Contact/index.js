import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Swal from 'sweetalert2'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

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
              window.location.reload(false)
            }
          })
        },
        () => {
          // alert('Failed to send the message, please try again')
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
            being able to develope professionally as a <i>web developer</i> or{' '}
            <i>full stack developer.</i>
          </p>
          <p>
            If you wish to contact me, if you have any questions or suggestions,
            you can do it through this form. Thanks!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
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
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact
