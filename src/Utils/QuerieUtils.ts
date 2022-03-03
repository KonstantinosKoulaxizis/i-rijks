import { gql } from '@apollo/client'
import store from '../index'

export const QuerieUtils = (() => {
  return {
    getArtPieces: () => {
      let result = ''
      const searchValue = store?.getState()?.artList?.searchValue
      //add search value to query
      if (searchValue) {
        result = result + `&q=${searchValue.replace(/\s/g, '+')}`
      }

      return gql`
        query GetArtPieces {
          response @rest(type: "ArtPieces", path: "${result}") {
            artObjects {
              objectNumber
              title
              principalOrFirstMaker
              longTitle
              headerImage {
                url
              }
            }
          }
        }
      `
    }
  }
})()
