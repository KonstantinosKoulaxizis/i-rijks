const LocalStorageUtils = (() => {
  return {
    storeSelectedLanguage: (language: string) => {
      localStorage.setItem('language', language)
    },
    getStoredLanguage: () => {
      return localStorage.getItem('language') || 'en'
    },
    storeIsDarkMode: (mode: boolean) => {
      localStorage.setItem('dark_mode', JSON.stringify(mode))
    },
    getIsDarkMode: () => {
      const mode = localStorage.getItem('dark_mode')
      return mode ? JSON.parse(mode) : false
    }
  }
})()

export default LocalStorageUtils
