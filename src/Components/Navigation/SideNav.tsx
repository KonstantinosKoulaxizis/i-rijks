import InputComponent from '../InputComponent'
import './Navigation.scss'

const SideNav = () => {
  const advancedSearchFields = [
    {label: 'involvedMaker',}
  ]
  return (
    <div id='side-navigation'>
      <hr />
      <button>download</button>
      <button>preview</button>
      <h4>Advanced search</h4>
    </div>
  )
}

export default SideNav
