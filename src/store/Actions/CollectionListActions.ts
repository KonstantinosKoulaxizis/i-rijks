import { COLLECTION_LIST, FAVORITES_LIST, LOADING_LIST, LIST_PAGE, HAS_MORE } from './ActionTypes'
import ColectionTileModel from '../../Models/ColectionTileModel'

export const setCollectionList = (list: ColectionTileModel[]) => ({
  type: COLLECTION_LIST,
  payload: list
})

export const setFavoritesList = (list: ColectionTileModel[]) => ({
  type: FAVORITES_LIST,
  payload: list
})

export const setListLoading = (loading: boolean) => ({
  type: LOADING_LIST,
  payload: loading
})

export const setListPage = (page: number) => ({
  type: LIST_PAGE,
  payload: page
})

export const setHasMore = (more: boolean) => ({
  type: HAS_MORE,
  payload: more
})
