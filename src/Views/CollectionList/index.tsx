import { useEffect } from 'react'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import ColectionTileModel from '../../Models/ColectionTileModel'
import ListView from '../../Components/ListView'

const CollectionList = () => {
  const collectionList: ColectionTileModel[] = useReduxSelector(state => state.collectionList.list)

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

export default CollectionList
