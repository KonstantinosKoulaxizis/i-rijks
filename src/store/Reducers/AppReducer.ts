import { APP_LANGUAGE, DARK_MODE } from '../Actions/ActionTypes'

const initialState = {
  appLanguage: '',
  darkMode: false
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case APP_LANGUAGE:
      return {
        ...state,
        appLanguage: action.payload
      }
    case DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      }
    default:
      return state
  }
}

export default appReducer
