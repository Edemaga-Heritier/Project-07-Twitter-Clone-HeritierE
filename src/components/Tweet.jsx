import TweetAction from "./Tweetaction";

const tweets = [
    {
        texte: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        date: "7m",
        author: "CNN",
        pseudo: "@CNN",
        badge: "src/images/Vector.svg",
        avatar: "src/images/CNN.png",
        tweetImage: "",
        favorite: "180",
        valueReply: "57",
        valueRetweet: "144",
        valueFavorite: "184",
        valuereReolies: "",
    },
    {
        texte: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
        date: "2m",
        author: "The New York Times",
        pseudo: "@nytimes",
        badge: "src/images/Vector.svg",
        avatar: "src/images/image1.svg",
        tweetImage: "src/images/tweet-image.png",
        favorite: "180",
        valueReply: "19",
        valueRetweet: "48",
        valueFavorite: "482",
        valuereReolies: "",
    },
    {
        texte: "BIG NEWS lol edems still Twitter",
        date: "Oct 29",
        author: "Twitter",
        pseudo: "@Twitter",
        badge: "src/images/Vector.svg",
        avatar: "src/images/image2.svg",
        tweetImage: "",
        favorite: "180",
        valueReply: "6.8K",
        valueRetweet: "36.6",
        valueFavorite: "267.1M",
        valuereReolies: "",
    },
    {
        texte: "hello literally everyone",
        date: "Oct 4",
        author: "Twitter",
        pseudo: "@Twitter",
        badge: "src/images/Vector.svg",
        avatar: "src/images/image2.svg",
        tweetImage: "",
        favorite: "180",
        valueReply: "118.7K",
        valueRetweet: "785.4K",
        valueFavorite: "3.3M",
        valuereReolies: "",
    },
   
];

const TweetImage = ({ source }) => {
    if (source != "") {
        return (
            <div className="tweet-image">
                <img src={source} alt="avatar-image" />
            </div>
        );
    }
};

const Tweet = () => {
    return (
        <>
            <div className="tweets">
                {tweets.map((tweet, index) => (
                    <div className="tweet" key={index}>
                        <div className="tweet-avatar">
                            <img src={tweet.avatar} alt="avatar-image" />
                        </div>
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <span className="tweet-title-author">
                                        {tweet.author}
                                    </span>
                                    <span>
                                        <img src={tweet.badge} alt="" />
                                    </span>
                                    <span className="tweet-title-details">
                                        {tweet.pseudo}
                                    </span>
                                    <span className="tweet-title-details">
                                        .
                                    </span>
                                    <span className="tweet-title-details">
                                        {tweet.date}
                                    </span>
                                </div>

                                <p className="tweet-text">
                                    <span>{tweet.texte}</span>
                                </p>
                                <TweetImage source={tweet.tweetImage} />
                            </div>
                            <TweetAction
                                valueReply={tweet.valueReply}
                                valueRetweet={tweet.valueRetweet}
                                valueFavorite={tweet.valueFavorite}
                                valuereReolies={tweet.valuereReolies}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tweet;





