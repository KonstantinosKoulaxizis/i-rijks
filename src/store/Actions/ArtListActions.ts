import { ART_LIST, SEARCH_VALUE } from './ActionTypes'
import ArtTileModel from '../../Models/ArtTileModel'

export const setArtList = (list: ArtTileModel[]) => ({
  type: ART_LIST,
  payload: list
})

export const SetSearchValue = (searchValue: string) => ({
  type: SEARCH_VALUE,
  payload: searchValue
})
