import CNN from "../images/CNN.png";
import Twitter from "../images/image2.svg";
import Times from "../images/image1.svg";
import Search from "../images/search.svg";
import Setting from "../images/gear.svg";
import More2 from "../images/More2.svg";

import React from "react";

const trends = () => {
  return (
    <>
      <div className="sidebar">
        <div className="search">
          <img src={Search} />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="Trends">
          <div className="Trend">
            <h2>Trends for you</h2>
            <img src={Setting} alt="setting" />
          </div>

          <div>
            <div className="trending-item">
              <p> Trending for turkey</p>
              <img src={More2} />
            </div>
            <p>#SQUID</p>
            <p>2,006 Tweets</p>
          </div>

          <div>
            <div className="trending-item">
              <p> Trending for turkey</p>
              <img src={More2} />
            </div>
            <p>#SQUID</p>
            <p>2,006 Tweets</p>
          </div>

          <div>
            <div className="trending-item">
              <p> Trending for turkey</p>
              <img src={More2} alt="" />
            </div>
            <p>#SQUID</p>
            <p>2,006 Tweets</p>
          </div>
        </div>

        <div className="Trends">
          <div>
            <h2>who to follow </h2>
            <img src={Times} />
            <p> The New York Times</p>
            <p>@nytimes</p>
            <button className="buttons">Follow</button>
          </div>

          <div>
            <img className="" src={CNN} alt="" />
            <p> The New York Times</p>
            <p>@CNN</p>
            <button className="buttons">Follow</button>
          </div>

          <div>
            <img className="" src={Twitter} alt="" />
            <p> The New York Times</p>
            <p>@Twitter</p>
            <button className="buttons">Follow</button>
          </div>

          <a href="#">Show More</a>
        </div>
      </div>
    </>
  );
};

export default trends;
