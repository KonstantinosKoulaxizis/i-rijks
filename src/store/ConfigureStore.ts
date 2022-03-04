import { createStore, combineReducers } from 'redux'
import appReducer from './Reducers/AppReducer'
import collectionListReducer from './Reducers/CollectionListReducers'
import searchReducer from './Reducers/SearchReducer'

const rootReducer = combineReducers({
  app: appReducer,
  collectionList: collectionListReducer,
  searchOptions: searchReducer
})

const configureStore = () => createStore(rootReducer)

export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
