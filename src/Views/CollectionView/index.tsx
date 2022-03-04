import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MuseumRequests } from '../../Utils/MuseumRequests'
// import CollectionDetailsModel from '../../Models/CollectionDetailsModel'

import './CollectionView.scss'

const CollectionView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loadedCollection, setLoadedCollection] = useState<any>({})
  console.log(
    '🚀 ~ file: index.tsx ~ line 12 ~ CollectionView ~ loadedCollection',
    loadedCollection
  )
  const [isLoaded, setLoaded] = useState(false)

  const handleGoBack = () => {
    navigate('../list')
  }

  const handleGetCollection = useCallback(async () => {
    if (id) {
      const collection = await MuseumRequests.getCollectionDetails(id)
      console.log(
        '🚀 ~ file: index.tsx ~ line 18 ~ handleGetCollection ~ collection',
        collection?.data?.response?.artObject
      )
      if (collection?.data?.response?.artObject) {
        setLoadedCollection(collection.data.response.artObject)
        setLoaded(true)
      }
    }
  }, [id])

  useEffect(() => {
    handleGetCollection()
  }, [handleGetCollection])
  return (
    <div id='collection-view'>
      <button onClick={handleGoBack}>Go back </button>
      {isLoaded && (
        <div id='collection-wrapper'>
          <div id='collection-details'>
            <h4>{loadedCollection.label.title}</h4>
            <img
              src={loadedCollection.webImage.url}
              alt={loadedCollection.label.title}
              loading='lazy'
            />
            <h5>{loadedCollection.label.makerLine}</h5>
            <h6>{loadedCollection.label.description}</h6>
          </div>

          <div id='collection-info'>
            <h4>1</h4>
            <h4>1</h4>
            <h4>1</h4>
            <h4>1</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectionView
