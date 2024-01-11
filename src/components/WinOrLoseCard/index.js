// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {status, score, topScore, onPlayAgain} = props
  return (
    <div className="winOrLossCard">
      <div className={`win-lose-card ${status === 'won' ? 'won' : 'lost'}`}>
        <img
          src={
            status === 'won'
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt={status === 'won' ? 'You won!' : 'You lost!'}
        />
        <div className="message">
          {status === 'won' ? 'You won!' : 'You lost!'}
        </div>
      </div>
      <div className="score-info">Score: {score}</div>
      <div className="top-score-info">Top Score: {topScore}</div>
      <button onClick={onPlayAgain} className="play button">
        Play Again
      </button>
    </div>
  )
}
export default WinOrLossCard
