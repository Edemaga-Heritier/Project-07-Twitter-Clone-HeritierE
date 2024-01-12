import Home from "./pages/home.jsx";
import Explore from "./pages/explore.jsx";
import Notification from "./pages/Notification.jsx";
import Profile from "./pages/Profile.jsx";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";



import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="Notification" element={<Notification />} />
        <Route path="Profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
