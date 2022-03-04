import { useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import { SetSearchValue } from '../../store/Actions/ArtListActions'
import InputComponent from '../InputComponent'

import './SearchField.scss'

const SearchField = () => {
  const dispatch = useReduxDispatch()
  const setSearchValue = useCallback(value => dispatch(SetSearchValue(value)), [dispatch])
  const searchValue: string = useReduxSelector(state => state.collectionList.searchValue)

  return (
    <div id='search-field-container'>
      <FaSearch />
      <InputComponent searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}

export default SearchField
