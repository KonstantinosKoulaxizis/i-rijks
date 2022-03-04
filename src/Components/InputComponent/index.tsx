import { useEffect, FunctionComponent } from 'react'

import InputFieldModel from '../../Models/InputFieldModel'

import useDebounce from '../../Hooks/useDebounce'
import { MuseumRequests } from '../../Utils/MuseumRequests'

import './InputComponent.scss'

const InputComponent: FunctionComponent<InputFieldModel> = ({ searchValue, setSearchValue, type }) => {
  const debouncedStoreData = useDebounce(searchValue, 800)

  const onHandleSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  useEffect(() => {
    MuseumRequests.getMuseumCollection()
    // set search page to 1
  }, [debouncedStoreData])

  return (
    <div className='input-component'>
      <input type={type} value={searchValue} onChange={onHandleSearchValue} />
    </div>
  )
}

export default InputComponent
