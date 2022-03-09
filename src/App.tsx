import { useEffect, useCallback } from 'react'
import AppRouter from './Routes'
import i18next from 'i18next'

import AppUtils from './Utils/AppUtils'
import { LANGUAGE, LIST_MODE } from './Consts/AppConsts'
import { setAppLanguage, setListMode } from './store/Actions/AppActions'
import { useReduxDispatch } from './Hooks/ReduxHooks'

import './App.scss'

const App = () => {
  const dispatch = useReduxDispatch()
  const appLanhuage = useCallback(value => dispatch(setAppLanguage(value)), [dispatch])
  const appListMode = useCallback(value => dispatch(setListMode(value)), [dispatch])

  const handleLoadStoredState = useCallback(async () => {
    const storedLanguage = AppUtils.getStoredValue(LANGUAGE) || 'en'
    const storedListMode = JSON.parse(AppUtils.getStoredValue(LIST_MODE) || 'false')

    appLanhuage(storedLanguage)
    appListMode(storedListMode)

    await AppUtils.getSavedFavorites()

    if (storedLanguage?.length) {
      i18next.changeLanguage(storedLanguage)
      return
    }
    i18next.changeLanguage('en')
  }, [appLanhuage, appListMode])

  useEffect(() => {
    handleLoadStoredState()
  }, [handleLoadStoredState])

  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}

export default App
