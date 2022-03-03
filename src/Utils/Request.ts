import { ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import store from '../index'

const Request = async (query: DocumentNode) => {
  const baseUrl = process.env.REACT_APP_RIJKS_PATH
  const language = store?.getState()?.app?.appLanguage || 'en'

  const restLink = new RestLink({
    uri: `${baseUrl}${language}/collection?key=${process.env.REACT_APP_RIJKS_KEY}&ps=${process.env.REACT_APP_REQUEST_LIMIT}&imgonly=true`
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
