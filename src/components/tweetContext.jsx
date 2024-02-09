import React, { createContext, useState, } from "react";
import Data from "./Data/data-Initiale.json"



export const TweetContext= createContext();

export const TweetProvider= ({children}) => {
    
    const DataTweet = Data.tweet
    const[tweetData,setTweetData] = useState(DataTweet)

    return(
        <TweetContext.Provider value ={{tweetData,setTweetData}}>
            {children}
        </TweetContext.Provider>
    );
};
