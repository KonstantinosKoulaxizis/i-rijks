import { useEffect } from 'react'
import AppRouter from './Routes'
import i18next from 'i18next'

import AppUtils from './Utils/AppUtils'
import { LANGUAGE } from './Consts/AppConsts'

import './App.scss'

const App = () => {
  const handleCheckLanguage = () => {
    const storedLanguage = AppUtils.getStoredValue(LANGUAGE) || 'en'
    console.log('refactor to update redux')

    if (storedLanguage?.length) {
      i18next.changeLanguage(storedLanguage)
      return
    }
    i18next.changeLanguage('en')
  }

  useEffect(() => {
    handleCheckLanguage()
  }, [])

  return (
    <div className='app'>
      <AppRouter />
    </div>
  )
}

export default App
