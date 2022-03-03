import { FunctionComponent } from 'react'
import SideNav from './SideNav'

import './Navigation.scss'

const Navigation: FunctionComponent = ({ children }) => {
  return (
    <div id='navigation-wrapper'>
      <div id='side-bar'>
        <SideNav />
      </div>
      <div id='navigation-view'>{children}</div>
      <div id='navigation-footer'>
        <button>change</button>
        <button>open_menu</button>
      </div>
    </div>
  )
}

export default Navigation
