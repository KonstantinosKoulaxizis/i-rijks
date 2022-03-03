import { useNavigate } from 'react-router-dom'

import './ArtList.scss'

const Landing = () => {
  const navigate = useNavigate()

  const handleNavigateToList = () => {
    navigate('/list')
  }
  return (
    <div>
      <button onClick={handleNavigateToList}>Go to list</button>
    </div>
  )
}

export default Landing
