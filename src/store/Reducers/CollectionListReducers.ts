import {
  COLLECTION_LIST,
  FAVORITES_LIST,
  LOADING_LIST,
  LIST_PAGE,
  HAS_MORE
} from '../Actions/ActionTypes'

const initialState = {
  list: [],
  favoritesList: [],
  loadingList: false,
  listPage: 1,
  hasMore: true
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
    case LOADING_LIST:
      return {
        ...state,
        loadingList: action.payload
      }
    case LIST_PAGE:
      return {
        ...state,
        listPage: action.payload
      }
    case HAS_MORE:
      return {
        ...state,
        hasMore: action.payload
      }
    default:
      return state
  }
}

export default collectionListReducer
