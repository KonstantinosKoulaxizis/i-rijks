import { ART_LIST } from './ActionTypes'
import ArtTileModel from '../../Models/ArtTileModel'

export const setArtList = (list: ArtTileModel[]) => ({
  type: ART_LIST,
  payload: list
})
