import { useCallback } from 'react'
import { useReduxDispatch, useReduxSelector } from '../../Hooks/ReduxHooks'
import i18next from 'i18next'

import { setAppLanguage, setAppDarkMode } from '../../store/Actions/AppActions'
import LocalStorageUtils from '../../Utils/LocalStorageUtils'

import './TopBar.scss'

const TopBar = () => {
  const dispatch = useReduxDispatch()
  const isDarkMode = useReduxSelector(state => state.app.darkMode)
  const language = useReduxSelector(state => state.app.appLanguage)
  const setLanguage = useCallback(t => dispatch(setAppLanguage(t)), [dispatch])
  const setDarkMode = useCallback(mode => dispatch(setAppDarkMode(mode)), [dispatch])

  const handleChangeDarkMode = () => {
    LocalStorageUtils.storeIsDarkMode(!isDarkMode)
    setDarkMode(!isDarkMode)
  }

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event?.target?.value) return

    LocalStorageUtils.storeSelectedLanguage(event.target.value)
    setLanguage(event.target.value)
    i18next.changeLanguage(event.target.value)
  }

  return (
    <div id='top-bar'>
      <div id='logo'>i - Rijks</div>

      <div id='top-bar-actions'>
        <button onClick={handleChangeDarkMode}>{'login'}</button>
        <select value={language || 'en'} onChange={handleChangeLanguage}>
          <option value='en'>EN</option>
          <option value='nl'>NL</option>
        </select>
      </div>
    </div>
  )
}

export default TopBar
