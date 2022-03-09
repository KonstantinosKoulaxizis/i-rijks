import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

import { MuseumRequests } from '../../Utils/MuseumRequests'
import CollectionDetailsModel from '../../Models/CollectionDetailsModel'
import AddToFavorites from '../../Components/AddToFavorites'

import './CollectionView.scss'

const CollectionView = () => {
  const { id } = useParams()
  const [loadedCollection, setLoadedCollection] = useState<CollectionDetailsModel | null>(null)
  const [isLoaded, setLoaded] = useState(false)

  const handleGetCollection = useCallback(async () => {
    if (id) {
      const collection = await MuseumRequests.getCollectionDetails(id)

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
    <div id="collection-view">
      {isLoaded ? (
        <div id="collection-wrapper">
          <div id="collection-details" className="card-background shadows-light">
            <AddToFavorites
              objectNumber={id!}
              title={loadedCollection!.label.title}
              principalOrFirstMaker={loadedCollection!.principalMaker}
              headerImage={loadedCollection!.webImage}
              longTitle={loadedCollection!.label.makerLine}
            />
            <h4>{loadedCollection!.label.title}</h4>
            <img
              src={loadedCollection!.webImage.url}
              alt={loadedCollection!.label.title}
              loading="lazy"
            />
            <h5>{loadedCollection!.label.makerLine}</h5>
            <h6>{loadedCollection!.label.description}</h6>
          </div>

          <div id="collection-info" className="card-background shadows-light">
            <div id="year-info">
              <h4>Year</h4>
              <h5>{loadedCollection!.dating.presentingDate}</h5>
            </div>

            <hr />
            <div>
              <h4>Used colors</h4>
              {loadedCollection!.colors.map((color, index) => (
                <div key={index} className="color-info">
                  <div className="round-dot" style={{ backgroundColor: `${color.hex}` }} />
                  <span>{color.percentage}%</span>
                </div>
              ))}
            </div>
            <hr />
            <div id="materials-ifo">
              <h4>Used materials</h4>
              {loadedCollection!.materials.map((material, index) => (
                <h5 key={index}>{material}</h5>
              ))}
            </div>
            <hr />
          </div>
        </div>
      ) : (
        <ClipLoader color="#f0f0f0" />
      )}
    </div>
  )
}

export default CollectionView
