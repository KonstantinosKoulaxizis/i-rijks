import { FunctionComponent } from 'react'
import { FaHeart } from 'react-icons/fa'

import './AddToFavorites.scss'

const AddToFavorites: FunctionComponent<{ objectNumber: string; readOnly: boolean }> = ({
  objectNumber,
  readOnly
}) => {
  const handleAddToFavorites = (id: string) => {
    if (readOnly) return
    console.log('add to localFoarge', id)
  }
  return (
    <div className='favorites-button'>
      <button onClick={() => handleAddToFavorites(objectNumber)}>
        <FaHeart />
      </button>
    </div>
  )
}

export default AddToFavorites
