import { useCallback } from 'react'
import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'

import { setAppLanguage } from '../../store/Actions/AppActions'
import { LANGUAGE } from '../../Consts/AppConsts'
import AppUtils from '../../Utils/AppUtils'

import './TopBar.scss'

const TopBar = () => {
  const dispatch = useReduxDispatch()
  const language = useReduxSelector(state => state.app.appLanguage)
  const setLanguage = useCallback(t => dispatch(setAppLanguage(t)), [dispatch])

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event?.target?.value) return

    AppUtils.setValueLocalStorage(LANGUAGE, event.target.value)
    setLanguage(event.target.value)
  }

  return (
    <div id='top-bar'>
      <div id='logo'>i - Rijks</div>

      <div id='top-bar-actions'>
        <select value={language || 'en'} onChange={handleChangeLanguage}>
          <option value='en'>EN</option>
          <option value='nl'>NL</option>
        </select>
      </div>
    </div>
  )
}

export default TopBar
