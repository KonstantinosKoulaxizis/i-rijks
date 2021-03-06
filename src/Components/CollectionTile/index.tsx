import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import CollectionTileModel from '../../Models/CollectionTileModel'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import AddToFavorites from '../AddToFavorites'

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
    navigate(`../list/${objectNumber}`)
  }
  return (
    <div className="cart-tile card-background shadows-light">
      <AddToFavorites
        objectNumber={objectNumber}
        title={title}
        principalOrFirstMaker={principalOrFirstMaker}
        headerImage={{ url: imageUrl }}
        longTitle={longTitle}
      />
      <span onClick={handleNavigateToImage}>
        <img src={imageUrl} alt={title} loading="lazy" />
        <div className="cart-tile-header">{listModeActive ? longTitle : title}</div>
        <div className="cart-tile-creator">{principalOrFirstMaker}</div>
      </span>
    </div>
  )
}

export default CollectionTile
