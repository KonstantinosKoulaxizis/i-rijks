import { FaListAlt, FaHeart } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router'

import './Navigation.scss'

const BottomNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const bottomNavigationButtons = [
    { icon: <FaListAlt />, path: '/list' },
    { icon: <FaHeart />, path: '/favorites' }
  ]

  return (
    <div id="navigation-footer">
      {bottomNavigationButtons.map(item => (
        <button
          key={item.path}
          className={location?.pathname === item.path ? ' active-link' : ''}
          onClick={() => navigate(`../${item.path}`)}>
          {item.icon}
        </button>
      ))}
    </div>
  )
}

export default BottomNavigation
