import { useEffect } from 'react'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'

import SearchField from '../../Components/SearchField'
import CollectionTile from '../../Components/CollectionTile'
import ArtTileModel from '../../Models/ArtTileModel'

import './CollectionList.scss'

const CollectionList = () => {
  const collectionList: ArtTileModel[] = useReduxSelector(state => state.collectionList.list)

  const handleCollectionList = async () => {
    await MuseumRequests.getMuseumCollection()
  }

  useEffect(() => {
    handleCollectionList()
  }, [])

  return (
    <div>
      <SearchField />
      <div id='photos'>
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
