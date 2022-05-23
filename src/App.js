
import "./app.css"
import AppAd from "./container/AppAd";
import AchievementsCont from "./container/AchievementsCont";
import ActiveMembers from "./container/ActiveMembers";
import FeaturesCont from "./container/FeaturesCont";
import Home from "./container/Home";
import WhyJoin from "./container/WhyJoin";
import Blog from "./container/Blog";
import Footer from "./container/Footer";

function App() {

    return (
      <div className="bg-gray-100">
      <Home/>
      <WhyJoin/>
      <AchievementsCont/>
      <FeaturesCont/>
      <ActiveMembers/>
      <AppAd/>
      <Blog/>
      <Footer/>
      </div>
    );
}

export default App;
