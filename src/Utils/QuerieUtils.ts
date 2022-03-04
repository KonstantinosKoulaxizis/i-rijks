import { gql } from '@apollo/client'
import AppUtils from './AppUtils'

export const QuerieUtils = (() => {
  return {
    getArtPieces: () => {
      const query = AppUtils.createSearchQuery()

      return gql`
        query GetArtPieces {
          response @rest(type: "ArtPieces", path: "${query}") {
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
    },
    getDetailsPage: () => {
      return gql`
        query GetDetailsPage {
          response @rest(type: "ArtPieces", path: "") {
            artObject {
              colors
              materials
              principalMaker
              dating {
                presentingDate
              }
              label {
                description
                makerLine
                title
              }
              webImage {
                url
              }
            }
          }
        }
      `
    }
  }
})()
