import { useEffect, FunctionComponent } from 'react'

import InputFieldModel from '../../Models/InputFieldModel'

import useDebounce from '../../Hooks/useDebounce'
import { MuseumRequests } from '../../Utils/MuseumRequests'

// import './InputComponent.scss'

const InputComponent: FunctionComponent<InputFieldModel> = ({ searchValue, setSearchValue }) => {
  const debouncedStoreData = useDebounce(searchValue, 800)

  const onHandleSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e?.currentTarget?.value) {
      setSearchValue(e.currentTarget.value)
    }
  }

  useEffect(() => {
    if (debouncedStoreData?.length > 2) {
      MuseumRequests.getMuseumCollection()
      // set search page to 1
    }
  }, [debouncedStoreData])

  return (
    <div id='input-component'>
      <input type='text' value={searchValue} onChange={onHandleSearchValue} />
    </div>
  )
}

export default InputComponent
