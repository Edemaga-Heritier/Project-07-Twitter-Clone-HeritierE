import Media  from '../images/Media.svg'
import Gif  from '../images/Gif.svg'
import Poll  from '../images/Poll.svg'
import Emogi  from '../images/Emoji.svg'
import schedule  from '../images/Schedule.svg'


const TweetEdictorButtons = () => {
  return (
    
     <div className="tweet-editor-buttons">
      
<div className="tweet-editor-actions">


    <img src={Media}  />
    <img src={Gif}  />
    <img src={Poll}  />
    <img src={Emogi}  />
    <img src={schedule}  />
</div>
<div className='button'>
        <span> Tweet</span>
          </div>    
       </div>    
        
    
  )
}

export default TweetEdictorButtons