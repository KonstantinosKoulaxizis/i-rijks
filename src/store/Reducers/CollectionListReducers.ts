import { COLLECTION_LIST, FAVORITES_LIST } from '../Actions/ActionTypes'

const initialState = {
  list: [],
  favoritesList: []
}

const collectionListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COLLECTION_LIST:
      return {
        ...state,
        list: action.payload
      }
    case FAVORITES_LIST:
      return {
        ...state,
        favoritesList: action.payload
      }
    default:
      return state
  }
}

export default collectionListReducer
