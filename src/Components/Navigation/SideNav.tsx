import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import {
  setInvolvedMaker,
  setMaterialUsed,
  setDatingPeriod,
  setShortBy
} from '../../store/Actions/SearchActions'
import InputComponent from '../InputComponent'
import NavigationButtonInterface from '../../Models/NavigationButtonInterface'
import { MuseumRequests } from '../../Utils/MuseumRequests'

import './Navigation.scss'

const SideNav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useReduxDispatch()
  const setMaker = useCallback(value => dispatch(setInvolvedMaker(value)), [dispatch])
  const setMaterial = useCallback(value => dispatch(setMaterialUsed(value)), [dispatch])
  const setPeriod = useCallback(value => dispatch(setDatingPeriod(value)), [dispatch])
  const sortBy = useCallback(value => dispatch(setShortBy(value)), [dispatch])

  const involvedMakerValue: string = useReduxSelector(state => state.searchOptions.involvedMaker)
  const MaterialUsedValue: string = useReduxSelector(state => state.searchOptions.materialUsed)
  const datingPeriodValue: string = useReduxSelector(state => state.searchOptions.datingPeriod)
  const sortByValue: string = useReduxSelector(state => state.searchOptions.sortBy)

  const advancedSearchFields = [
    { label: 'Involved maker', value: involvedMakerValue, action: setMaker, type: 'text' },
    { label: 'Material used', value: MaterialUsedValue, action: setMaterial, type: 'text' },
    {
      label: 'Dating period',
      value: datingPeriodValue,
      action: setPeriod,
      type: 'number',
      min: '0',
      max: '21'
    }
  ]

  const navigationButtons = [
    { label: 'List', path: '/list' },
    { label: 'Favorites', path: '/favorites' }
  ]

  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Achronologic', value: 'achronologic' },
    { label: 'Chronologic', value: 'chronologic' },
    { label: 'Artist (A-Z)', value: 'artist' },
    { label: 'Artist desc (Z-A)', value: 'artistdesc' }
  ]

  const handleChangeSortBy = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event?.target?.value) return
    sortBy(event.target.value)
    await MuseumRequests.getMuseumCollection()
  }

  return (
    <div id="side-navigation">
      <hr />
      {navigationButtons.map((btn: NavigationButtonInterface) => (
        <button
          className={`shadows${location?.pathname === btn.path ? ' active-link' : ''}`}
          key={btn.path}
          onClick={() => navigate(`../${btn.path}`)}>
          {btn.label}
        </button>
      ))}
      <div className={location?.pathname === '/list' ? 'visible_class' : 'hidden_class'}>
        <h4>Advanced search</h4>
        <div id="advanced-search-wrapper">
          {advancedSearchFields.map(field => (
            <div key={field.label} className="advanced-search-fields">
              <label>{field.label}</label>
              <InputComponent
                searchValue={field.value}
                setSearchValue={field.action}
                type={field.type}
                min={field?.min || undefined}
                max={field?.max || undefined}
              />
            </div>
          ))}
          <div className="advanced-search-fields">
            <label>Sort results</label>
            <select value={sortByValue || 'default'} onChange={handleChangeSortBy}>
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav
