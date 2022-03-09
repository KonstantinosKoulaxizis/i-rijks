import { useNavigate } from 'react-router-dom'

import './Landing.scss'

const Landing = () => {
  const navigate = useNavigate()

  const handleNavigateToList = () => {
    navigate('/list')
  }
  return (
    <div id="landing-view">
      <div id="landing_message">
        <h3>browse through Rijksmuseum's collection and create your own favorite list </h3>
        <button onClick={handleNavigateToList}>Go to collections</button>
      </div>
    </div>
  )
}

export default Landing
