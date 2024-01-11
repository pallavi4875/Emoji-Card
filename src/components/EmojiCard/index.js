// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {EmojiCardDetails} = props
  const {id, emojiName, emojiUrl} = EmojiCardDetails

  return(
    <div className="card">
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </div>,
  )
}
export default EmojiCard
