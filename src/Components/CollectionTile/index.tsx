import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

const CollectionTile: FunctionComponent<{
  objectNumber: string
  title: string
  principalOrFirstMaker: string
  imageUrl: string
  longTitle: string
}> = ({ objectNumber, title, principalOrFirstMaker, imageUrl, longTitle }) => {
  const navigate = useNavigate()
  const handleNavigateToImage = () => {
    navigate(`../${objectNumber}`)
  }
  return (
    <div className='art-tile' onClick={handleNavigateToImage}>
      <img src={imageUrl} alt={title} loading='lazy'/>
      <div className='art-tile-header'>{title}</div>
      <div className='art-tile-creator'>{principalOrFirstMaker}</div>
    </div>
  )
}

export default CollectionTile
