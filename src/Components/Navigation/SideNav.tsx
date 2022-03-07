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
  console.log("🚀 ~ file: SideNav.tsx ~ line 29 ~ SideNav ~ sortByValue", sortByValue)

  const advancedSearchFields = [
    { label: 'involved_maker', value: involvedMakerValue, action: setMaker, type: 'text' },
    { label: 'material_used', value: MaterialUsedValue, action: setMaterial, type: 'text' },
    {
      label: 'dating_period',
      value: datingPeriodValue,
      action: setPeriod,
      type: 'number',
      min: '0',
      max: '21'
    }
  ]

  const navigationButtons = [
    { label: 'list', path: '/list' },
    { label: 'favorites', path: '/favorites' }
  ]

  const sortOptions = [
    { label: 'default', value: 'default' },
    { label: 'achronologic', value: 'achronologic' },
    { label: 'chronologic', value: 'chronologic' },
    { label: 'artist', value: 'artist' },
    { label: 'artistdesc', value: 'artistdesc' }
  ]

  const handleChangeSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event?.target?.value) return
    console.log("🚀 ~ file: SideNav.tsx ~ line 58 ~ handleChangeSortBy ~ event", event.target.value)
    sortBy(event.target.value)
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
        <h4>advanced_search</h4>
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
            <label>sort_results</label>
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
