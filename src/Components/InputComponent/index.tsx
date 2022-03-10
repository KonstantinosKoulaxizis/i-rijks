import { useEffect, FunctionComponent } from 'react'

import InputFieldModel from '../../Models/InputFieldModel'

import useDebounce from '../../Hooks/useDebounce'
import { MuseumRequests } from '../../Utils/MuseumRequests'

import './InputComponent.scss'

const InputComponent: FunctionComponent<InputFieldModel> = ({
  searchValue,
  setSearchValue,
  type,
  min,
  max
}) => {
  const debouncedStoreData = useDebounce(searchValue, 800)

  const onHandleSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (min && max) {
      const numToCompare = parseFloat(e?.currentTarget?.value || '0')

      if (numToCompare < parseFloat(min) || numToCompare > parseFloat(max)) return
    }
    setSearchValue(e.currentTarget.value)
  }

  useEffect(() => {
    MuseumRequests.getMuseumCollection()
  }, [debouncedStoreData])

  return (
    <div className='input-component'>
      <input type={type} value={searchValue} onChange={onHandleSearchValue} min={min} max={max} />
    </div>
  )
}

export default InputComponent
