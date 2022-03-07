import localforage from 'localforage'
import ColectionTileModel from '../Models/ColectionTileModel'
import { setFavoritesList } from '../store/Actions/CollectionListReducers'
import { FAVORITE_COLLECTIONS, ADD_TO_FORAGE, REMOVE_FROM_FORAGE } from '../Consts/AppConsts'
import store from '../index'

const AppUtils = (() => {
  return {
    setValueLocalStorage: (type: string, value: string) => {
      localStorage.setItem(type, value)
    },
    getStoredValue: (type: string) => {
      return localStorage.getItem(type)
    },
    saveFavorite: async (favorite: ColectionTileModel, action: string) => {
      try {
        let list: ColectionTileModel[] = []

        const favoriteCollections: ColectionTileModel[] =
          (await localforage.getItem(FAVORITE_COLLECTIONS)) || []

        if (action === ADD_TO_FORAGE) {
          list = [favorite, ...favoriteCollections]
          await localforage.setItem(FAVORITE_COLLECTIONS, [favorite, ...favoriteCollections])
        }
        if (action === REMOVE_FROM_FORAGE) {
          const filtered = favoriteCollections.filter(c => c.objectNumber !== favorite.objectNumber)
          list = filtered
          await localforage.setItem(FAVORITE_COLLECTIONS, filtered)
        }
        store.dispatch(setFavoritesList(list))
      } catch (err) {
        // show toast message
        console.log(err)
      }
    },
    getSavedFavorites: async () => {
      try {
        const favoriteCollections: ColectionTileModel[] =
          (await localforage.getItem(FAVORITE_COLLECTIONS)) || []

        store.dispatch(setFavoritesList(favoriteCollections))
      } catch (err) {
        // show toast message
        console.log(err)
      }
    },
    createSearchQuery: () => {
      let result = ''
      const searchValue = store?.getState()?.searchOptions?.searchValue
      const involvedMaker = store?.getState()?.searchOptions?.involvedMaker
      const materialUsed = store?.getState()?.searchOptions?.materialUsed
      const datingPeriod = store?.getState()?.searchOptions?.datingPeriod
      const shortByValue = store?.getState()?.searchOptions?.sortBy

      //add search value to query
      if (!!searchValue?.length) {
        result = result + `&q=${searchValue.replace(/\s/g, '+')}`
      }
      if (!!involvedMaker?.length) {
        result = result + `&involvedMaker=${involvedMaker.replace(/\s/g, '+')}`
      }
      if (!!materialUsed?.length) {
        result = result + `&material=${materialUsed.replace(/\s/g, '+')}`
      }
      if (!!datingPeriod?.length) {
        result = result + `&f.dating.period=${datingPeriod}`
      }
      if (!!shortByValue?.length && shortByValue !== 'default') {
        result = result + `&s=${shortByValue}`
      }

      return result
    }
  }
})()

export default AppUtils
