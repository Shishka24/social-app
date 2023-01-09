import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Components/Profile/Profile";
import NavBar from "../Components/NavBar/NavBar";
import Header from "../Components/Header/Header";
import News from "../Components/News/News";
import DialogsContainer from "../Components/Dialogs/DialogsContainer";
import UsersContainer from "../Components/Users/UsersContainer";

function App(props) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" exact element={<News />} />
            <Route path="/dialogs" exact element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile />} />/
            <Route path="/users" element={<UsersContainer />} />/
            <Route path="/news" exact element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
