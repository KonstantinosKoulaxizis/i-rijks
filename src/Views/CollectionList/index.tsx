import { useEffect } from 'react'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'

import SearchField from '../../Components/SearchField'
import CollectionTile from '../../Components/CollectionTile'
import ColectionTileModel from '../../Models/ColectionTileModel'

import './CollectionList.scss'

const CollectionList = () => {
  const collectionList: ColectionTileModel[] = useReduxSelector(state => state.collectionList.list)
  const listModeActive = useReduxSelector(state => state.app.listMode)

  const handleCollectionList = async () => {
    await MuseumRequests.getMuseumCollection()
  }

  useEffect(() => {
    handleCollectionList()
  }, [])

  return (
    <div>
      <SearchField />
      <div id={listModeActive ? 'collection-list' : 'collection-tiles'}>
        {collectionList.map(item => (
          <CollectionTile
            key={item.objectNumber}
            objectNumber={item.objectNumber}
            title={item.title}
            principalOrFirstMaker={item.principalOrFirstMaker}
            longTitle={item.longTitle}
            imageUrl={item.headerImage.url}
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionList
