import "./App.css";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
