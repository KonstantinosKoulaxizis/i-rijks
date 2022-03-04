import {
  SEARCH_VALUE,
  INVOLVED_MAKER,
  MATERIAL_USED,
  COLOR_USED,
  DATING_PERIOD
} from './ActionTypes'

export const setSearchValue = (searchValue: string) => ({
  type: SEARCH_VALUE,
  payload: searchValue
})

export const setInvolvedMaker = (maker: string) => ({
  type: INVOLVED_MAKER,
  payload: maker
})

export const setMaterialUsed = (material: string) => ({
  type: MATERIAL_USED,
  payload: material
})

export const setColorUsed = (color: string) => ({
  type: COLOR_USED,
  payload: color
})

export const setDatingPeriod = (period: string) => ({
  type: DATING_PERIOD,
  payload: period
})
