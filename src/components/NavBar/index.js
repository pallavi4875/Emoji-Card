// Write your code here.
import './index.css'

const NavBar = props => {
  const {Score, topScore} = props
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
