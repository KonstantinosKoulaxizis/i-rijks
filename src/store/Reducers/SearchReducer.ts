import {
  SEARCH_VALUE,
  INVOLVED_MAKER,
  MATERIAL_USED,
  DATING_PERIOD,
  SHORT_BY
} from '../Actions/ActionTypes'

const initialState = {
  searchValue: '',
  involvedMaker: '',
  materialUsed: '',
  datingPeriod: '',
  sortBy: ''
}

const SearchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case INVOLVED_MAKER:
      return {
        ...state,
        involvedMaker: action.payload
      }
    case MATERIAL_USED:
      return {
        ...state,
        materialUsed: action.payload
      }
    case DATING_PERIOD:
      return {
        ...state,
        datingPeriod: action.payload
      }
    case SHORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    default:
      return state
  }
}

export default SearchReducer
