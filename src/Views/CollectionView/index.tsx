import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MuseumRequests } from '../../Utils/MuseumRequests'
// import CollectionDetailsModel from '../../Models/CollectionDetailsModel'

const CollectionView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loadedImage, setLoadedImage] = useState<any>({})
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ CollectionView ~ loadedImage', loadedImage)

  const handleGoBack = () => {
    navigate('../list')
  }

  const handleGetImage = useCallback(async () => {
    if (id) {
      const image = await MuseumRequests.getCollectionDetails(id)
      console.log("🚀 ~ file: index.tsx ~ line 19 ~ handleGetImage ~ image", image)
      setLoadedImage(image)
    }
  }, [id])

  useEffect(() => {
    handleGetImage()
  }, [handleGetImage])
  return (
    <div>
      <button onClick={handleGoBack}>Go back </button>
      <div></div>
    </div>
  )
}

export default CollectionView
