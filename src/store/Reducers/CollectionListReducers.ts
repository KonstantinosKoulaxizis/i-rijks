import { ART_LIST, SEARCH_VALUE } from '../Actions/ActionTypes'

const initialState = {
  list: [],
  searchValue: ''
}

const collectionListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ART_LIST:
      return {
        ...state,
        list: action.payload
      }
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state
  }
}

export default collectionListReducer
