import { IconBaseProps } from "react-icons";

interface ToggleIconButtonModel {
  listeningState: boolean
  changeState: (state: boolean) => void
  activeIcon: IconBaseProps
  inactiveIcon: IconBaseProps
}

export default ToggleIconButtonModel
