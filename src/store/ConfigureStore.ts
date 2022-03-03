import { createStore, combineReducers } from 'redux'
import appReducer from './Reducers/AppReducer'
import artListReducer from './Reducers/ArtListReducers'

const rootReducer = combineReducers({
  app: appReducer,
  collectionList: artListReducer
})

const configureStore = () => createStore(rootReducer)

export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
