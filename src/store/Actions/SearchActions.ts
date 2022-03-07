import {
  SEARCH_VALUE,
  INVOLVED_MAKER,
  MATERIAL_USED,
  SHORT_BY,
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

export const setShortBy = (sortBy: string) => ({
  type: SHORT_BY,
  payload: sortBy
})

export const setDatingPeriod = (period: string) => ({
  type: DATING_PERIOD,
  payload: period
})
