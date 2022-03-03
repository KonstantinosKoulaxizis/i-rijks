import { useNavigate, useParams } from 'react-router-dom'

const ImageView = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('../list')
  }
  return (
    <div>
      <button onClick={handleGoBack}>Go back </button>
      <div>Image view - {id}</div>
    </div>
  )
}

export default ImageView
