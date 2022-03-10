import { Routes, Route, Outlet } from 'react-router-dom'

import TopBar from '../Components/TopBar'
import Navigation from '../Components/Navigation'
import Landing from '../Views/Landing'
import CollectionList from '../Views/CollectionList'
import CollectionView from '../Views/CollectionView'
import NoMatch from '../Views/NoMatch'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='favorites' element={<CollectionList />} />
          <Route path='list' element={<CollectionList />} />
          <Route path='list/:id' element={<CollectionView />} />
        </Route>
        <Route path='no_mach' element={<NoMatch />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Navigation>
        <Outlet />
      </Navigation>
    </div>
  )
}
