import { useCallback } from 'react'
import { FaSearch, FaList, FaBorderAll } from 'react-icons/fa'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import { setSearchValue } from '../../store/Actions/SearchActions'
import InputComponent from '../InputComponent'
import ToggleIconButton from '../ToggleIconButton'
import { LIST_MODE } from '../../Consts/AppConsts'
import { setListMode } from '../../store/Actions/AppActions'
import AppUtils from '../../Utils/AppUtils'

import './SearchField.scss'

const SearchField = () => {
  const dispatch = useReduxDispatch()
  const setSearch = useCallback(value => dispatch(setSearchValue(value)), [dispatch])
  const listMode = useCallback(value => dispatch(setListMode(value)), [dispatch])
  const searchValue = useReduxSelector(state => state.searchOptions.searchValue)
  const listModeActive = useReduxSelector(state => state.app.listMode)

  const handleUpdateDarkMode = () => {
    AppUtils.setValueLocalStorage(LIST_MODE, JSON.stringify(!listModeActive))
    listMode(!listModeActive)
  }

  return (
    <div id='search-field-container' className="shadows">
      <button id='disabled-search-button'>
        <FaSearch />
      </button>
      <InputComponent
        searchValue={searchValue}
        setSearchValue={setSearch}
        type={'text'}
        min={undefined}
        max={undefined}
      />
      <ToggleIconButton
        listeningState={listModeActive}
        changeState={handleUpdateDarkMode}
        activeIcon={<FaList />}
        inactiveIcon={<FaBorderAll />}
      />
    </div>
  )
}

export default SearchField
