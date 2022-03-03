import { useEffect } from 'react'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import { useReduxSelector } from '../../Hooks/ReduxHooks'

import SearchField from '../../Components/SearchField'
import ArtTile from '../../Components/ArtTile'
import ArtTileModel from '../../Models/ArtTileModel'

import './ArtList.scss'

const ArtList = () => {
  const artList: ArtTileModel[] = useReduxSelector(state => state.artList.list)

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
        {artList.map(item => (
          <ArtTile
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

export default ArtList
