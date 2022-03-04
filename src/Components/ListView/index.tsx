import { FunctionComponent } from 'react'
import { useLocation } from 'react-router'

import ListViewModel from '../../Models/ListViewModel'
import { useReduxSelector } from '../../Hooks/ReduxHooks'
import SearchField from '../SearchField'
import CollectionTile from '../CollectionTile'

import './ListView.scss'

const ListView: FunctionComponent<ListViewModel> = ({ data }) => {
  const location = useLocation()
  const listModeActive = useReduxSelector(state => state.app.listMode)

  return (
    <div>
      <div className={location.pathname !== '/list' ? 'hidden_class' : ''}>
        <SearchField />
      </div>
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
