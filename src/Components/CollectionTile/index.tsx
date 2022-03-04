import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import CollectionTileModel from '../../Models/CollectionTileModel'
import { useReduxSelector } from '../../Hooks/ReduxHooks'

const CollectionTile: FunctionComponent<CollectionTileModel> = ({
  objectNumber,
  title,
  principalOrFirstMaker,
  imageUrl,
  longTitle
}) => {
  const navigate = useNavigate()
  const listModeActive = useReduxSelector(state => state.app.listMode)

  const handleNavigateToImage = () => {
    navigate(`../${objectNumber}`)
  }
  return (
    <div className='art-tile' onClick={handleNavigateToImage}>
      <img src={imageUrl} alt={title} loading='lazy' />
      <div className='art-tile-header'>{listModeActive ? longTitle : title}</div>
      <div className='art-tile-creator'>{principalOrFirstMaker}</div>
    </div>
  )
}

export default CollectionTile
