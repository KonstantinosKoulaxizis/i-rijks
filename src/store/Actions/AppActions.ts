import { APP_LANGUAGE, LIST_MODE } from './ActionTypes'

export const setAppLanguage = (language: string) => ({
  type: APP_LANGUAGE,
  payload: language
})

export const setListMode = (listMode: boolean) => ({
  type: LIST_MODE,
  payload: listMode
})
