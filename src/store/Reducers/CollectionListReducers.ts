import { ART_LIST } from '../Actions/ActionTypes'

const initialState = {
  list: []
}

const collectionListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ART_LIST:
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }
}

export default collectionListReducer
