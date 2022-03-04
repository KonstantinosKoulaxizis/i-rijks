import { FunctionComponent } from 'react'
import ToggleIconButtonModel from '../../Models/ToggleIconButtonModel'

const ToggleIconButton: FunctionComponent<ToggleIconButtonModel> = ({
  listeningState,
  changeState,
  activeIcon,
  inactiveIcon
}) => {
  const handleChangeState = () => {
    changeState(!listeningState)
  }
  return <button onClick={handleChangeState}>{listeningState ? activeIcon : inactiveIcon}</button>
}

export default ToggleIconButton
