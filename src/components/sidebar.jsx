import {Link} from 'react-router-dom'
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

const user={
  imageSize:50,
}

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
            <Link to="/" className="sidebar-link">
              <img src={Home} alt="" />
              <span> Home</span>
            </Link>
          </li>

          <li className="content">
            <Link to='/explore' className="sidebar-link">
            <img src={Explore} alt=" " />
            <span className="ver">Explore </span>
            </Link>
            
          </li>

          <li className="content">
            <Link to='/notifications'  className="sidebar-link" >
            <img src={Notifications} alt=" " />
            <span>Notifications</span>
            </Link>
            
          </li>

          <li className="content">
            <Link to ='/bookmarks' className="sidebar-link">
            <img src={Bookmarks} alt="" />
            <span>BooksMarks </span>

            </Link>
            
          </li>

          <li className="content">
            <Link to='/lists'  className="sidebar-link">
            <img src={Lists} alt="" />
            <span>Lists</span>
            </Link>
            
          </li>

          <li className="content">
            <Link to='/profile' className="sidebar-link">
            <img src={Profile} alt="" />
            <span>Profile</span>
            
            </Link>
            
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
          <div className="i">
            <img src={profiles} 
            style={{
              width:user.imageSize
              
            }}
            />

          </div>
          
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