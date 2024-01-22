import CNN from "../images/CNN.png";
import Twitter from "../images/image2.svg";
import Times from "../images/image1.svg";
import Search from "../images/search.svg";
import Setting from "../images/gear.svg";
import More2 from "../images/More2.svg";
import { useState } from "react";


const trends = () => {
  const [searchText,setSearchText]=useState('')
  return (
    <div className="Trends"> 
     <div className="search-bar">
    <img src={Search} alt="Search icon" />
    <input className="search-input" 
    type="text"
     placeholder="Search Twitter"  
     onChange={(e)=>setSearchText(e.target.value)} 
     value={searchText}  
     onClick={() => setSearchText('')}/>
  </div>

  <div className="trending-items">
    <div className="trends-header">
      <h3>Trends for you</h3>
      <img src={Setting} alt="Settings" />
    </div>  
      <TrendingItem topic="#SQUID" tweetsCount="2,006" location="turkey" />
      <TrendingItem topic="#SQUID" tweetsCount="2,006" location="turkey" />
      <TrendingItem topic="#SQUID" tweetsCount="2,006" location="turkey" />
  
    </div>
  

  <div className="follow">
    <h3>Who to follow</h3>
    <FollowSuggestion profile={Times} username="@nytimes" name="The New York Times" />
    <FollowSuggestion profile={CNN} username="@CNN" name="The New York Times" />
    <FollowSuggestion profile={Twitter} username="@Twitter" name="The New York Times" />  
    <a href="#">Show More</a>
  </div>

  </div>
     
   
  );
};


const TrendingItem = ({ topic, tweetsCount, location }) => {
  return (
    <div className="trending-item">
      <div className="trends-header">
        <p>{location ? `Trending for ${location}` : 'Trending'}</p>
        <img src={More2} alt="More" />
      </div>
      <div >
      <p className=" topic">{topic}</p>
      <p className=" topics" >{tweetsCount} Tweets</p>
      </div>
      
    </div>
  );
};

const FollowSuggestion = ({ profile, username, name }) => {
  return (
    <>
    <div className="follow-suggestion">
    <img src={profile} alt={name} />
    <p>{name}</p>
    <p>{username}</p>
    
  </div>
  <div className="follow-suggestions">
  
  <button className="buttons">Follow</button>

  </div>
  
 
  </>
    
  );
};

export default trends;
