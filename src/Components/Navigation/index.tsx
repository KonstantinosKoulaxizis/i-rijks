import { FunctionComponent, UIEvent } from 'react'
import { useLocation } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import SideNav from './SideNav'
import BottomNavigation from './BottomNavigation'

import './Navigation.scss'

const Navigation: FunctionComponent = ({ children }) => {
  const location = useLocation()
  const isLoading = useReduxSelector(state => state.collectionList.loadingList)

  const handleInfineteScroll = async (e: UIEvent<HTMLDivElement>) => {
    if (location?.pathname !== '/list') return

    const containerHeight = e.currentTarget.clientHeight
    const scrollHeight = e.currentTarget.scrollHeight
    const scrollTop = e.currentTarget.scrollTop

    const percentage = ((scrollTop + containerHeight) / scrollHeight) * 100

    if (percentage === 100) {
      await MuseumRequests.getMuseumNextCollection()
    }
  }

  return (
    <div id="navigation-wrapper">
      <div id="side-bar">{location?.pathname !== '/' && <SideNav />}</div>
      <div
        id="navigation-view"
        className={location?.pathname === '/' ? 'full-width' : ''}
        onScroll={handleInfineteScroll}>
        {children}
        {isLoading && <ClipLoader color="#f0f0f0" />}
      </div>
      {location?.pathname !== '/' && <BottomNavigation />}
    </div>
  )
}

export default Navigation
