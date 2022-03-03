import { APP_LANGUAGE, DARK_MODE } from './ActionTypes'

export const setAppLanguage = (language: string) => ({
  type: APP_LANGUAGE,
  payload: language
})

export const setAppDarkMode = (darkMode: boolean) => ({
  type: DARK_MODE,
  payload: darkMode
})
