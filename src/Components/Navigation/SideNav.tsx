import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import {
  setInvolvedMaker,
  setMaterialUsed,
  setColorUsed,
  setDatingPeriod
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
  const setColor = useCallback(value => dispatch(setColorUsed(value)), [dispatch])
  const setPeriod = useCallback(value => dispatch(setDatingPeriod(value)), [dispatch])

  const involvedMakerValue: string = useReduxSelector(state => state.searchOptions.involvedMaker)
  const MaterialUsedValue: string = useReduxSelector(state => state.searchOptions.materialUsed)
  const colorUsedValue: string = useReduxSelector(state => state.searchOptions.colorUsed)
  const datingPeriodValue: string = useReduxSelector(state => state.searchOptions.datingPeriod)

  const advancedSearchFields = [
    { label: 'involved_maker', value: involvedMakerValue, action: setMaker, type: 'text' },
    { label: 'material_used', value: MaterialUsedValue, action: setMaterial, type: 'text' },
    { label: 'color_used', value: colorUsedValue, action: setColor, type: 'color' },
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
      <div
        className={`shadows-light ${
          location?.pathname === '/list' ? 'visible_class' : 'hidden_class'
        }`}>
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
        </div>
      </div>
    </div>
  )
}

export default SideNav
