import { ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

import AppUtils from './AppUtils'
import { LANGUAGE } from '../Consts/AppConsts'

const Request = async (query: DocumentNode, id?: string) => {
  const language = AppUtils.getStoredValue(LANGUAGE) || 'en'
  const baseUrl = `${process.env.REACT_APP_RIJKS_PATH}${language}/collection`
  const key = `?key=${process.env.REACT_APP_RIJKS_KEY}`
  const generalQuery = id?.length ? '' : `&ps=${process.env.REACT_APP_REQUEST_LIMIT}&imgonly=true`
  const idRequest = id?.length ? `/${id}` : ''

  const restLink = new RestLink({
    uri: `${baseUrl}${idRequest}${key}${generalQuery}`
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
  })

  try {
    return await client.query({ query: query })
  } catch (error) {
    //   show error
    console.log(error)
  }
}

export default Request
