import { Link } from 'react-router-dom'
import { usePageTitle } from '../../hooks/usePageTitle'
import './index.scss'

const NotFound = () => {
  usePageTitle('Page not found')

  return (
    <div className="container notfound-page">
      <div className="text-zone">
        <h1>404</h1>
        <p>This page doesn&apos;t exist.</p>
        <Link to="/" className="flat-button">
          BACK HOME
        </Link>
      </div>
    </div>
  )
}

export default NotFound
