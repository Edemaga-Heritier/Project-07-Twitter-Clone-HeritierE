import React, { useState } from 'react';
import reply from "./../images/Reply.svg";
import retweet from "./../images/Retweet.svg";
import favorite from "./../images/React.svg";
import Heart from "./../images/heart.svg";
import tweetReplies from "./../images/Tweet-Replies.svg";
const TweetAction = ({
    valueReply,
    valueRetweet,
    valueFavorite,
    valuereReolies,
}) => {

    const [isFavorited, setIsFavorited] = useState(valueFavorite);
    const [count, setCount] = useState(0)
  
    const changeIcon = () => {
        setIsFavorited(!isFavorited);
      };
    
      const handleClick = () => {
        setCount((count) => (isFavorited ? count - 1 : count + 1)); // Update count based on previous value
        setIsFavorited(!isFavorited); // Toggle favorite state
      };



    
    return (
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={reply} alt="image-reply" />
                {valueReply}
            </div>
            <div className="tweet-action">
                <img src={retweet} alt="image-retweet" />
                {valueRetweet}
            </div>
            <div className="tweet-action">
                
                <img src={isFavorited ? favorite :Heart} alt="image-favorite"
                onMouseEnter={() => setIsFavorited(true)  }
                //  onMouseLeave={() => setIsFavorited(false)}
                onClick={handleClick}
                
                className={`favorite ${isFavorited ? 'favorited' : ''}`}
                style={{
                    width: '24px', 
                    transition: '0.2s ease-in-out all', 
                    cursor: 'pointer', 
                  }}
                />
                {isFavorited && count > 0 && ( // Only show count if favorited and count > 0
          <div className="favorite-count">{count}</div> // Display count in separate element
        )}
            </div>
            
            <div className="tweet-action">
                <img src={tweetReplies} alt="image-tweetReplies" />
                {valuereReolies}
            </div>
        </div>
    );
};

export default TweetAction;