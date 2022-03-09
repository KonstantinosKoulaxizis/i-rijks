import { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'

import SideNav from './SideNav'

import './Navigation.scss'

const Navigation: FunctionComponent = ({ children }) => {
  const location = useLocation()

  return (
    <div id='navigation-wrapper'>
      <div id='side-bar'>{location?.pathname !== '/' && <SideNav />}</div>
      <div id='navigation-view' className={location?.pathname === '/' ? 'full-width' : ''}>{children}</div>
      {location?.pathname !== '/' && (
        <div id='navigation-footer'>
          <button>change</button>
          <button>open_menu</button>
        </div>
      )}
    </div>
  )
}

export default Navigation
