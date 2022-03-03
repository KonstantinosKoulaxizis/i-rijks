import { Routes, Route, Outlet } from 'react-router-dom'

// import { PrivateRoute } from './PrivateRoute'
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
          <Route path='list' element={<CollectionList />} />
          <Route path=':id' element={<CollectionView />} />
          {/* <Route
            path="templates"
            element={<PrivateRoute component={Templates} />}
          /> */}
          {/* <Route path='new' element={<PrivateRoute component={NewSurvey} />} />
          <Route path='SimpleTemplate' element={<SimpleTemplate />} /> */}
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
