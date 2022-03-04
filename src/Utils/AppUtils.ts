const AppUtils = (() => {
  return {
    setValueLocalStorage: (type: string, value: string) => {
      localStorage.setItem('language', value)
    },
    getStoredValue: (type: string) => {
      return localStorage.getItem('language') || 'en'
    }
    // storeIsDarkMode: (mode: boolean) => {
    //   localStorage.setItem('dark_mode', JSON.stringify(mode))
    // },
    // getIsDarkMode: () => {
    //   const mode = localStorage.getItem('dark_mode')
    //   return mode ? JSON.parse(mode) : false
    // }
  }
})()

export default AppUtils
