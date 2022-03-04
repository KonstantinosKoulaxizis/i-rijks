import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MuseumRequests } from '../../Utils/MuseumRequests'
// import CollectionDetailsModel from '../../Models/CollectionDetailsModel'

import './CollectionView.scss'

const CollectionView = () => {
  const { id } = useParams()
  const [loadedCollection, setLoadedCollection] = useState<any>({})
  const [isLoaded, setLoaded] = useState(false)

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
      {isLoaded && (
        <div id='collection-wrapper'>
          <div id='collection-details' className='card-background'>
            <h4>{loadedCollection.label.title}</h4>
            <img
              src={loadedCollection.webImage.url}
              alt={loadedCollection.label.title}
              loading='lazy'
            />
            <h5>{loadedCollection.label.makerLine}</h5>
            <h6>{loadedCollection.label.description}</h6>
          </div>

          <div id='collection-info' className='card-background'>
            <div id='year-info'>
              <h4>year</h4>
              <h5>{loadedCollection?.dating?.presentingDate}</h5>
            </div>

            <hr />
            <div>
              <h4>used_colors</h4>
              {loadedCollection?.colors.map((color: { hex: string; percentage: string }) => (
                <div key={color.hex} className='color-info'>
                  <div className='round-dot' style={{ backgroundColor: `${color.hex}` }} />
                  <span>{color.percentage}%</span>
                </div>
              ))}
            </div>
            <hr />
            <div id='materials-ifo'>
              <h4>used_materials</h4>
              {loadedCollection?.materials.map((material: string) => (
                <h5 key={material}>{material}</h5>
              ))}
            </div>
            <hr />
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectionView
