import { useEffect } from 'react'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import ColectionTileModel from '../../Models/ColectionTileModel'
import ListView from '../../Components/ListView'

const FavoritesList = () => {
  const collectionList: ColectionTileModel[] = useReduxSelector(
    state => state.collectionList.favoritesList
  )

  const handleCollectionList = async () => {
    await MuseumRequests.getMuseumCollection()
  }

  useEffect(() => {
    handleCollectionList()
  }, [])

  return (
    <div>
      <ListView data={collectionList} />
    </div>
  )
}

export default FavoritesList
