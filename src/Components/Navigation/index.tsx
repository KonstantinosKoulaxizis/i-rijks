import { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'

import SideNav from './SideNav'

import './Navigation.scss'

const Navigation: FunctionComponent = ({ children }) => {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ location', location?.pathname)

  return (
    <div id='navigation-wrapper'>
      <div id='side-bar'>{location?.pathname !== '/' && <SideNav />}</div>
      <div id='navigation-view'>{children}</div>
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
