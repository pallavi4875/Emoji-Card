// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {EmojiCardDetails} = props
  const {id, emojiName, emojiUrl} = EmojiCardDetails
  
  const handleCardClick = () => {
    onClick(id);
  };

  return(
    <div className="card" onClick={handleCardClick}>
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </div>,
  )
}
export default EmojiCard
