import { FunctionComponent } from 'react'

import ListViewModel from '../../Models/ListViewModel'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import SearchField from '../SearchField'
import CollectionTile from '../CollectionTile'

const ListView: FunctionComponent<ListViewModel> = ({ data }) => {
  const listModeActive = useReduxSelector(state => state.app.listMode)

  return (
    <div>
      <SearchField />
      <div id={listModeActive ? 'collection-list' : 'collection-tiles'}>
        {data.map(item => (
          <CollectionTile
            key={item.objectNumber}
            objectNumber={item.objectNumber}
            title={item.title}
            principalOrFirstMaker={item.principalOrFirstMaker}
            longTitle={item.longTitle}
            imageUrl={item.headerImage.url}
          />
        ))}
      </div>
    </div>
  )
}

export default ListView
