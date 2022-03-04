import { COLLECTION_LIST, FAVORITES_LIST } from './ActionTypes'
import ColectionTileModel from '../../Models/ColectionTileModel'

export const setCollectionList = (list: ColectionTileModel[]) => ({
  type: COLLECTION_LIST,
  payload: list
})

export const setFavoritesList = (list: ColectionTileModel[]) => ({
  type: FAVORITES_LIST,
  payload: list
})
