import { FunctionComponent, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

import AppUtils from '../../Utils/AppUtils'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import ColectionTileModel from '../../Models/ColectionTileModel'
import { ADD_TO_FORAGE, REMOVE_FROM_FORAGE } from '../../Consts/AppConsts'

import './AddToFavorites.scss'

const AddToFavorites: FunctionComponent<ColectionTileModel> = ({
  objectNumber,
  title,
  principalOrFirstMaker,
  headerImage,
  longTitle
}) => {
  const { id } = useParams()
  const favoritesList = useReduxSelector(state => state.collectionList.favoritesList)
  const [isFavorite, setIsFavorite] = useState(
    favoritesList.find((fav: ColectionTileModel) => fav.objectNumber === objectNumber) || false
  )
  const handleChangeStatus = async () => {
    if (!id) return

    const favorite = {
      objectNumber: objectNumber,
      title: title,
      principalOrFirstMaker: principalOrFirstMaker,
      headerImage: headerImage,
      longTitle: longTitle
    }
    setIsFavorite(!isFavorite)
    const action = !isFavorite ? ADD_TO_FORAGE : REMOVE_FROM_FORAGE
    await AppUtils.saveFavorite(favorite, action)
  }

  return (
    <div className={'favorites-button'}>
      <button onClick={handleChangeStatus}>
        <FaHeart className={`${isFavorite ? 'favorite-collection' : ''}`} />
      </button>
    </div>
  )
}

export default AddToFavorites
