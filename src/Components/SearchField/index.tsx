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
      <button id="disabled-search-button">
        <FaSearch />
      </button>
      <InputComponent
        searchValue={searchValue}
        setSearchValue={setSearch}
        type={'text'}
        min={undefined}
        max={undefined}
      />
      <button id="list-state-button">test</button>
    </div>
  )
}

export default SearchField
