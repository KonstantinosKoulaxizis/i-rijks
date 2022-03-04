import store from '../index'

const AppUtils = (() => {
  return {
    setValueLocalStorage: (type: string, value: string) => {
      localStorage.setItem(type, value)
    },
    getStoredValue: (type: string) => {
      return localStorage.getItem(type)
    },
    createSearchQuery: () => {
      let result = ''
      const searchValue = store?.getState()?.searchOptions?.searchValue
      const involvedMaker = store?.getState()?.searchOptions?.involvedMaker
      const materialUsed = store?.getState()?.searchOptions?.materialUsed
      const datingPeriod = store?.getState()?.searchOptions?.datingPeriod
      const colorUsed = store?.getState()?.searchOptions?.colorUsed

      //add search value to query
      if (searchValue?.length) {
        result = result + `&q=${searchValue.replace(/\s/g, '+')}`
      }
      if (involvedMaker?.length) {
        result = result + `&involvedMaker=${involvedMaker.replace(/\s/g, '+')}`
      }
      if (materialUsed?.length) {
        result = result + `&material=${materialUsed.replace(/\s/g, '+')}`
      }
      if (datingPeriod?.length) {
        result = result + `&f.dating.period=${datingPeriod}`
      }
      if (colorUsed?.length) {
        result = result + `&f.normalized32Colors.hex=${colorUsed}`
      }

      return result
    }
  }
})()

export default AppUtils
