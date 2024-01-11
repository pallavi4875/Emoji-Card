// Write your code here.
import './index.css'
import {DEFAULT_FILE_SYSTEM_ADAPTER} from 'fast-glob/out/settings'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
        </li>
        <li>Emoji Name</li>
        <li>Score:{score}</li>
        <li>Top Score:{topScore}</li>
      </ul>
    </nav>
  )
}
export default NavBar
