import { FunctionComponent, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

import AppUtils from '../../Utils/AppUtils'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import AddToFavoritesModel from '../../Models/AddToFavoritesModel'
import { ADD_TO_FORAGE, REMOVE_FROM_FORAGE } from '../../Consts/AppConsts'

import './AddToFavorites.scss'

const AddToFavorites: FunctionComponent<AddToFavoritesModel> = ({
  readOnly,
  objectNumber,
  title,
  principalOrFirstMaker,
  imageUrl,
  longTitle
}) => {
  const favoritesList = useReduxSelector(state => state.collectionList.favoritesList)
  const [isFavorite, setIsFavorite] = useState(
    favoritesList.find((fav: AddToFavoritesModel) => fav.objectNumber === objectNumber) || false
  )

  const handleChangeStatus = async () => {
    if (readOnly) return

    const favorite = {
      objectNumber: objectNumber,
      title: title,
      principalOrFirstMaker: principalOrFirstMaker,
      headerImage: { url: imageUrl },
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
