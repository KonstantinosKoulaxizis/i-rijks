import { useCallback, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import { SetSearchValue } from '../../store/Actions/ArtListActions'
import useDebounce from '../../Hooks/useDebounce'
import { MuseumRequests } from '../../Utils/MuseumRequests'

import './SearchField.scss'

const SearchField = () => {
  const dispatch = useReduxDispatch()
  const setSearchValue = useCallback(value => dispatch(SetSearchValue(value)), [dispatch])
  const searchValue: string = useReduxSelector(state => state.collectionList.searchValue)
  const debouncedStoreData = useDebounce(searchValue, 800)

  const onHandleSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e?.currentTarget?.value) {
      setSearchValue(e.currentTarget.value)
    }
  }

  useEffect(() => {
    if (debouncedStoreData?.length > 2) {
      MuseumRequests.getMuseumCollection()
    }
  }, [debouncedStoreData])

  return (
    <div id='search-field-container'>
      <FaSearch />
      <input type='text' value={searchValue} onChange={onHandleSearchValue} />
    </div>
  )
}

export default SearchField
