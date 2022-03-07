import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import ColectionTileModel from '../../Models/ColectionTileModel'
import ListView from '../../Components/ListView'

const CollectionList = () => {
  const location = useLocation()
  const collectionList: ColectionTileModel[] = useReduxSelector(state => state.collectionList.list)
  const favoritesCollectionList: ColectionTileModel[] = useReduxSelector(
    state => state.collectionList.favoritesList
  )

  const handleCollectionList = useCallback(async () => {
    if (!collectionList) {
      await MuseumRequests.getMuseumCollection()
    }
  }, [collectionList])

  useEffect(() => {
    handleCollectionList()
  }, [handleCollectionList])

  return (
    <div>
      <ListView data={location.pathname === '/list' ? collectionList : favoritesCollectionList} />
    </div>
  )
}

export default CollectionList
