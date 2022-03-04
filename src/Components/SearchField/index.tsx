import { useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import { setSearchValue } from '../../store/Actions/SearchActions'
import InputComponent from '../InputComponent'

import './SearchField.scss'

const SearchField = () => {
  const dispatch = useReduxDispatch()
  const setSearch = useCallback(value => dispatch(setSearchValue(value)), [dispatch])
  const searchValue: string = useReduxSelector(state => state.searchOptions.searchValue)

  return (
    <div id='search-field-container'>
      <FaSearch />
      <InputComponent
        searchValue={searchValue}
        setSearchValue={setSearch}
        type={'text'}
        min={undefined}
        max={undefined}
      />
    </div>
  )
}

export default SearchField
