import Twitter from "../images/Twitter.svg";
import Home from "../images/Home-Fill.svg";
import Explore from "../images/Explore.svg";
import Notifications from "../images/Notifications.svg";
import Bookmarks from "../images/Bookmarks.svg";
import Lists from "../images/Lists.svg";
import Profile from "../images/Profile.svg";
import More from "../images/More.svg";
import More2 from "../images/More2.svg";
import profiles from "../images/profile-photo.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <div>
            <li className="content">
              <img src={Twitter} alt="" />
            </li>
          </div>

          <li className="content">
            <img src={Home} alt="" />
            <span> Home</span>
          </li>

          <li className="content">
            <img src={Explore} alt=" " />
            <span className="ver">Explore </span>
          </li>

          <li className="content">
            <img src={Notifications} alt=" " />
            <span>Notifications</span>
          </li>

          <li className="content">
            <img src={Bookmarks} alt="" />
            <span>BooksMarks </span>
          </li>

          <li className="content">
            <img src={Lists} alt="" />
            <span>Lists</span>
          </li>

          <li className="content">
            <img src={Profile} alt="" />
            <span>Profile</span>
          </li>

          <li className="content">
            <img src={More} alt="" />
            <span>More</span>
          </li>
        </ul>
        <div>
          <button className="btn">tweet</button>
        </div>

        <div className="profil">
          <img src={profiles} alt="" />

          <div className="icon">
            <span className="tweet-title-author"> pioche</span>
            <img src={More2} alt="" />
          </div>

          <span className="tweet-title-details">@pioche</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
