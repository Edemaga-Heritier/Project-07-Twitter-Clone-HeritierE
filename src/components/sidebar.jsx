import { Link } from "react-router-dom";
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

const user = {
  imageSize: 50,
};

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <div>
            <li className="">
              <img src={Twitter} alt="" />
            </li>
          </div>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out ">
            <Link to="/" className="sidebar-link">
              <img src={Home} alt="" />
              <span> Home</span>
            </Link>
          </li>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out">
            <Link to="/explore" className="sidebar-link">
              <img src={Explore} alt=" " />
              <span className="ver">Explore </span>
            </Link>
          </li>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out">
            <Link to="/notifications" className="sidebar-link">
              <img src={Notifications} alt=" " />
              <span>Notifications</span>
            </Link>
          </li>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out">
            <Link to="/bookmarks" className="sidebar-link">
              <img src={Bookmarks} alt="" />
              <span>BooksMarks </span>
            </Link>
          </li>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out">
            <Link to="/lists" className="sidebar-link">
              <img src={Lists} alt="" />
              <span>Lists</span>
            </Link>
          </li>

          <li className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-3xl transition duration-150 ease-in-out">
            <Link to="/profile" className="sidebar-link">
              <img src={Profile} alt="" />
              <span>Profile</span>
            </Link>
          </li>

          <li  className="flex-row justify-start items-start flex gap-2 p-3 list-none hover:bg-gray-700 cursor-pointer rounded-full transition duration-150 ease-in-out">
            <img src={More} alt="" />
            <span>More</span>
          </li>
        </ul>
        <div>
          <button className=" capitalize  p-4 border-none rounded-2xl bg-cyan-500 text-white cursor-pointer items-center text-base m-2 mt-13 px-16 ">tweet</button>
        </div>

        <span className="profil">
          <Link to="/Profile">
            <img
              src={profiles}
              style={{
                width: user.imageSize,
              }}
            />
          </Link>

          <span className="profil-title">
            <h3>
              <Link className="sidebar-link" to="/Profile">
    
              </Link>
              <img src={More2} alt="" />
            </h3>
            <p>@pioche</p>
          </span>
        </span>
      </div>
    </>
  );
};
export default Sidebar;
