
import LightIcon from 'assets/icons/light.svg'

import './ToggleTheme.scss';
const ToggleTheme = () => {
  return (
		<span className="toggle-theme">
			<span>Light</span> <img src={LightIcon} alt="light" />
		</span>
  )
}

export default ToggleTheme