import { useCallback } from 'react'

import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import {
  setInvolvedMaker,
  setMaterialUsed,
  setColorUsed,
  setDatingPeriod
} from '../../store/Actions/SearchActions'

import InputComponent from '../InputComponent'

import './Navigation.scss'

const SideNav = () => {
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
    { label: 'dating_period', value: datingPeriodValue, action: setPeriod, type: 'number' }
  ]

  return (
    <div id='side-navigation'>
      <hr />
      <button>download</button>
      <button>preview</button>
      <h4>Advanced search</h4>
      <div id='advanced-search-wrapper'>
        {advancedSearchFields.map(field => (
          <div key={field.label} className='advanced-search-fields'>
            <label>{field.label}</label>
            <InputComponent
              searchValue={field.value}
              setSearchValue={field.action}
              type={field.type}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
