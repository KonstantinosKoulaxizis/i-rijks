import Request from './Request'
import { QuerieUtils } from './QuerieUtils'
import { setCollectionList } from '../store/Actions/CollectionListReducers'
import store from '../index'

export const MuseumRequests = (() => {
  return {
    getMuseumCollection: async () => {
      const response = await Request(QuerieUtils.getArtPieces())

      store.dispatch(setCollectionList(response?.data?.response?.artObjects || []))
    },
    getCollectionDetails: async (id: string) => {
      return await Request(QuerieUtils.getDetailsPage(), id)
    }
  }
})()
