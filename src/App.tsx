import { useEffect } from 'react'
import AppRouter from './Routes'
import i18next from 'i18next'

import LocalStorageUtils from './Utils/LocalStorageUtils'

import './App.scss'

const App = () => {
  const handleCheckLanguage = () => {
    const storedLanguage = LocalStorageUtils.getStoredLanguage()
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
