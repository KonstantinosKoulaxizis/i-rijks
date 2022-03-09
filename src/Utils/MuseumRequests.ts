import Request from './Request'
import { QuerieUtils } from './QuerieUtils'
import { setCollectionList } from '../store/Actions/CollectionListActions'
import { setListLoading, setListPage, setHasMore } from '../store/Actions/CollectionListActions'
import store from '../index'

export const MuseumRequests = (() => {
  return {
    getMuseumCollection: async () => {
      store.dispatch(setListLoading(true))
      store.dispatch(setListPage(1))
      store.dispatch(setHasMore(true))

      const response = await Request(QuerieUtils.getArtPieces())

      store.dispatch(setCollectionList(response?.data?.response?.artObjects || []))
      store.dispatch(setListLoading(false))
    },
    getMuseumNextCollection: async () => {
      if (!store.getState().collectionList.hasMore || store.getState().collectionList.loadingList) {
        return
      }

      const currentPage = store?.getState()?.collectionList?.listPage || 1
      store.dispatch(setListLoading(true))
      store.dispatch(setListPage(currentPage + 1))

      const response = await Request(QuerieUtils.getArtPieces())
      const responseArray = response?.data?.response?.artObjects || []
      const previousArray = store.getState().collectionList.list

      if (responseArray?.length) {
        store.dispatch(setCollectionList([...previousArray, ...responseArray]))
      } else {
        store.dispatch(setHasMore(false))
      }
      store.dispatch(setListLoading(false))
    },
    getCollectionDetails: async (id: string) => {
      return await Request(QuerieUtils.getDetailsPage(), id)
    }
  }
})()
