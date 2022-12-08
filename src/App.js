import Feed from "./component/feed/feed";
import RightBar from "./component/rightBar/rightBar";
import SideBar from "./component/sideBar/sideBar";
import Home from "./pages/Home/home";
import "./app.css"
function App() {
  return (
    <div className="App">
     <Home/>
     <div className="HomeContainer">

     <SideBar/>
     <Feed/>
     <RightBar/>
     </div>
    </div>
  );
}

export default App;
